/* eslint-disable no-param-reassign */
/* global TweenLite */
/* global Circ */
const generateParticles = () => {
  let width;
  let height;
  let largeHeader;
  let canvas;
  let ctx;
  let points;
  let target;
  let animateHeader = true;

  class Circle {
    constructor(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
    }

    draw() {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(156,217,249,${this.active})`;
      ctx.fill();
    }
  }

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    largeHeader = document.getElementById('large-header');
    largeHeader.style.height = `${height}px`;

    canvas = document.getElementById('demo-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create points
    points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = {
          x: px,
          originX: px,
          y: py,
          originY: py,
        };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.length; i += 1) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j += 1) {
        const p2 = points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k += 1) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k += 1) {
            if (!placed) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point

    points.forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const c = new Circle(item, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      item.circle = c;
    });
  }

  function mouseMove(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = `${height}px`;
    canvas.width = width;
    canvas.height = height;
  }

  function getDistance(p1, p2) {
    return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
  }

  function drawLines(p) {
    if (!p.active) return;

    p.closest.forEach((item) => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(item.x, item.y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    });
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);

      points.forEach((item) => {
        // detect points in range
        if (Math.abs(getDistance(target, item)) < 4000) {
          item.active = 0.3;
          item.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, item)) < 20000) {
          item.active = 0.1;
          item.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, item)) < 40000) {
          item.active = 0.02;
          item.circle.active = 0.1;
        } else {
          item.active = 0;
          item.circle.active = 0;
        }

        drawLines(item);
        item.circle.draw();
      });
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete() {
        shiftPoint(p);
      },
    });
  }

  function initAnimation() {
    animate();
    points.forEach((item) => {
      shiftPoint(item);
    });
  }

  // Event handling
  function addListeners() {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  // Main
  initHeader();
  initAnimation();
  addListeners();
};

export default generateParticles;
