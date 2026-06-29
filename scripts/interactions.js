import {
  DATA_NEWS,
  formatReductionLabel,
  makeCategoryList,
  makeGraphEdges,
  makeGraphNodes
} from './model.js';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

window.addEventListener('DOMContentLoaded', () => {
  hydrateMetricCards();
  hydrateSources();
  initScrollAnimations();
  initNavigationSpy();
  initFaultMap();
  initTimeSlider();
  initFunnel();
  initRobotParts();
  initBuildingLights();
  initLegacyChart();
});

function hydrateMetricCards() {
  $$('.flip-card[data-metric-id]').forEach((card) => {
    const metric = DATA_NEWS.heroMetrics.find((item) => item.id === card.dataset.metricId);
    if (!metric) return;
    card.setAttribute('title', `${metric.label}｜来源：${metric.source}`);
  });
}

function hydrateSources() {
  document.documentElement.style.setProperty('--midnight', DATA_NEWS.palette.midnight);
  document.documentElement.style.setProperty('--deep-blue', DATA_NEWS.palette.deepBlue);
  document.documentElement.style.setProperty('--electric-yellow', DATA_NEWS.palette.electricYellow);
  document.documentElement.style.setProperty('--electric-blue', DATA_NEWS.palette.electricBlue);
}

export function initScrollAnimations() {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.hero-grid span', {
      opacity: 0.74,
      yoyo: true,
      repeat: -1,
      stagger: 0.12,
      duration: 1.4,
      ease: 'sine.inOut'
    });

    $$('.reveal-on-scroll').forEach((element) => {
      gsap.fromTo(element,
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.82,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    gsap.from('.flip-card', {
      y: 18,
      scale: 0.94,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power2.out'
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.18 });
  $$('.reveal-on-scroll').forEach((element) => observer.observe(element));
}

function initNavigationSpy() {
  const links = $$('.story-nav a');
  const sections = DATA_NEWS.sections.map((section) => $(`#${section.id}`)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { threshold: [0.35, 0.55, 0.75] });
  sections.forEach((section) => observer.observe(section));
}

export function initFaultMap() {
  const detail = $('#fault-detail');
  const buttons = $$('.fault-point');

  const render = (index) => {
    const item = DATA_NEWS.faultPoints[index];
    if (!item || !detail) return;
    detail.innerHTML = `
      <strong>${item.name}</strong>
      <span>抢修路线：${item.route}</span><br>
      <span>处理结果：${item.result}</span>
    `;
    buttons.forEach((button) => {
      const active = Number(button.dataset.faultIndex) === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => render(Number(button.dataset.faultIndex)));
  });
  render(0);
}

export function initTimeSlider() {
  const input = $('#slider-input');
  const divider = $('#compare-divider');
  const oldFlow = $('#old-flow');
  const newFlow = $('#new-flow');
  const result = $('#time-result');
  if (!input || !divider || !oldFlow || !newFlow || !result) return;

  const update = () => {
    const value = Number(input.value);
    divider.style.left = `${value}%`;
    oldFlow.style.opacity = String(Math.max(0.25, 1 - value / 130));
    oldFlow.style.filter = `grayscale(${value / 100})`;
    newFlow.style.opacity = String(Math.max(0.4, value / 100));
    result.textContent = formatReductionLabel(45, 8);
    result.dataset.slider = String(value);
  };

  input.addEventListener('input', update);
  update();
}

function initFunnel() {
  const detail = $('#funnel-detail');
  const steps = $$('.funnel-step');
  const cases = $$('.case-card');
  const renderStep = (index) => {
    const item = DATA_NEWS.funnel[index];
    if (!item || !detail) return;
    detail.innerHTML = `<strong>${item.label}</strong>：${item.detail}`;
    steps.forEach((step) => step.classList.toggle('is-active', Number(step.dataset.funnelIndex) === index));
  };

  steps.forEach((step) => step.addEventListener('click', () => renderStep(Number(step.dataset.funnelIndex))));
  cases.forEach((card) => {
    card.addEventListener('click', () => {
      const item = DATA_NEWS.innovationCases[Number(card.dataset.caseIndex)];
      if (!item || !detail) return;
      detail.innerHTML = `<strong>${item.title}</strong><br>现场痛点：${item.pain}<br>改造结果：${item.outcome}<br>产出：${item.impact}`;
      cases.forEach((node) => node.classList.toggle('is-active', node === card));
    });
  });
  renderStep(0);
}

export function initRobotParts() {
  const detail = $('#robot-detail');
  const buttons = $$('.robot-controls button');

  const render = (partId) => {
    const part = DATA_NEWS.robotParts.find((item) => item.id === partId) || DATA_NEWS.robotParts[0];
    if (!detail) return;
    detail.innerHTML = `<strong>${part.label}</strong>：${part.detail}`;
    buttons.forEach((button) => {
      const active = button.dataset.part === part.id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  buttons.forEach((button) => button.addEventListener('click', () => render(button.dataset.part)));
  render('insulation');
}

export function initBuildingLights() {
  const wrap = $('.building-wrap');
  const windows = $$('.building-window');
  const caption = $('#light-caption');
  if (!wrap || windows.length === 0) return;

  const lightAll = () => {
    wrap.classList.add('is-lit');
    windows.forEach((windowNode, index) => {
      setTimeout(() => windowNode.classList.add('is-lit'), index * 55);
    });
    if (caption) caption.textContent = '37栋老楼、148个黑楼道，灯一层层亮起来。';
  };

  if (window.gsap && window.ScrollTrigger) {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(windows, {
      scrollTrigger: {
        trigger: wrap,
        start: 'top 72%',
        once: true,
        onEnter: lightAll
      }
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lightAll();
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });
  observer.observe(wrap);
}

export function initLegacyChart() {
  const container = $('#legacy-chart');
  const fallback = $('#legacy-fallback');
  if (!container) return;

  if (!window.echarts) {
    if (fallback) fallback.hidden = false;
    return;
  }

  const echarts = window.echarts;
  const chart = echarts.init(container, null, { renderer: 'canvas' });
  const nodes = makeGraphNodes(DATA_NEWS.legacyNetwork);
  const links = makeGraphEdges(DATA_NEWS.legacyNetwork);
  const categories = makeCategoryList(DATA_NEWS.legacyNetwork);

  chart.setOption({
    backgroundColor: 'transparent',
    color: ['#FFD84D', '#4FD7FF', '#8FE6B7', '#FF8F70'],
    tooltip: {
      trigger: 'item',
      confine: true,
      formatter: (params) => {
        if (params.dataType === 'edge') return '经验继续扩散';
        return `<strong>${params.name}</strong><br>${params.data.tooltip || ''}`;
      }
    },
    legend: {
      bottom: 0,
      textStyle: { color: '#E7F6FF' },
      data: categories.map((item) => item.name)
    },
    series: [{
      name: '经验扩散',
      type: 'graph',
      layout: 'force',
      roam: true,
      draggable: true,
      categories,
      data: nodes,
      links,
      edgeSymbol: ['none', 'arrow'],
      force: { repulsion: 260, edgeLength: [78, 150], gravity: 0.08 },
      label: { show: true, color: '#E7F6FF', fontWeight: 700 },
      lineStyle: { color: 'source', curveness: 0.18, opacity: 0.72, width: 2 },
      itemStyle: { borderColor: '#06172D', borderWidth: 2, shadowBlur: 16, shadowColor: 'rgba(79,215,255,0.35)' },
      emphasis: { focus: 'adjacency', lineStyle: { width: 4 } }
    }]
  });

  window.addEventListener('resize', () => chart.resize());
}
