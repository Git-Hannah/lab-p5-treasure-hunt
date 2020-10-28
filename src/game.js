class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //strokeWeight(1);
    //line(10, 10, 10, 90);
    //stroke(126);
    // for (let i = 0; i < height; i += 20) {
    //   fill(129, 206, 15);
    //   rect(0, i, width, 10);
    //   fill(255);
    //   rect(i, 0, 10, height);

      for (let x = 0; x < WIDTH + 1; x += WIDTH / 10) {
		  for (let y = 0; y < HEIGHT + 1; y += HEIGHT / 10) {
			  strokeWeight(1);
			  line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
        //line(x1, y1, x2, y2); Linie von x1y1 nach x2y2
		  }
	  }
  }
}

class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.image;
  }
  drawPlayer() {
    fill("blue");
    image(this.image, this.x, this.y, 100, 100);
  }
}
