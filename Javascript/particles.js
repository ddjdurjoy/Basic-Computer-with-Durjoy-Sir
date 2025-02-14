const ParticleConfig = {
    count: 50, // পার্টিকেল সংখ্যা
    maxSpeed: 0.5, // সর্বোচ্চ গতি
    mouseRadius: 150, // মাউস প্রভাব এলাকা
    repelForce: 0.5, // বিকর্ষণ শক্তি
    colors: ["#839d9e", "#bac8de", "#f7f0cb"], // পার্টিকেল কালার
  };
  
  class RepellingParticle {
    constructor() {
      this.element = document.createElement("div");
      this.element.className = "particle";
      this.reset();
      document.getElementById("particles").appendChild(this.element);
    }
  
    reset() {
      // র্যান্ডম পজিশন এবং ভেলোসিটি
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * ParticleConfig.maxSpeed;
      this.vy = (Math.random() - 0.5) * ParticleConfig.maxSpeed;
  
      // র্যান্ডম কালার সিলেক্ট
      this.element.style.backgroundColor =
        ParticleConfig.colors[
          Math.floor(Math.random() * ParticleConfig.colors.length)
        ];
    }
  
    update(mouseX, mouseY) {
      // মাউস থেকে দূরত্ব ক্যালকুলেট
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      // মাউসের প্রভাব এলাকায় থাকলে
      if (distance < ParticleConfig.mouseRadius) {
        const angle = Math.atan2(dy, dx);
        const force =
          (ParticleConfig.mouseRadius - distance) / ParticleConfig.mouseRadius;
  
        // বিকর্ষণ ভেলোসিটি এডজাস্ট
        this.vx -= Math.cos(angle) * force * ParticleConfig.repelForce;
        this.vy -= Math.sin(angle) * force * ParticleConfig.repelForce;
      }
  
      // স্পীড লিমিটার
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > ParticleConfig.maxSpeed) {
        this.vx = (this.vx / speed) * ParticleConfig.maxSpeed;
        this.vy = (this.vy / speed) * ParticleConfig.maxSpeed;
      }
  
      // পজিশন আপডেট
      this.x += this.vx;
      this.y += this.vy;
  
      // স্ক্রিন বাউন্ডারি
      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -0.8;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -0.8;
  
      // এলিমেন্ট পজিশন
      this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
  }
  
  // সিস্টেম ইনিশিয়ালাইজেশন
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  const particles = Array(ParticleConfig.count)
    .fill()
    .map(() => new RepellingParticle());
  
  // মাউস ট্র্যাকিং
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // অ্যানিমেশন লুপ
  function animate() {
    particles.forEach((particle) => particle.update(mouseX, mouseY));
    requestAnimationFrame(animate);
  }
  
  // রিসাইজ হ্যান্ডলার
  window.addEventListener("resize", () => {
    particles.forEach((particle) => particle.reset());
  });
  
  animate();