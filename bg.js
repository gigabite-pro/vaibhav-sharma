const colors = ['var(--black)'];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  if(window.innerWidth > 768){
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    ball.style.zIndex = -1;
    ball.style.opacity = 0.5;
    
    balls.push(ball);
    document.body.append(ball);
  }else{
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 90)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    ball.style.zIndex = -1;
    ball.style.opacity = 0.5;
    
    balls.push(ball);
    document.body.append(ball);
  }
}

// Keyframes
balls.forEach((el, i, ra) => {
  if(window.innerWidth < 786){
    let to = {
      x: Math.random() * (i % 2 === 0 ? -8 : 8),
      y: Math.random() * 8
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 5000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  }else{
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 15
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 3000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  }

});
