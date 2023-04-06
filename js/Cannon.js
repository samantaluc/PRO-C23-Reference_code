class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle; // esse angulo
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  
  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) { //se a tecla abaixada é a seta direita E o angulo é menor que 70 graus
      this.angle += 1; //aumente o angulo atual em +1
    }

    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) { //se a tecla abaixada é a seta esquerda E o angulo é menor que -30 graus(210 da direita para esquerda) 
      this.angle -= 1; //diminua o angulo atual em -1
    }

    push(); 
    translate(this.x, this.y); //traduz/modifica o ponto para rotação da ponta para o centro da imagem
    rotate(this.angle); //rotaciona de acordo com o valor do angulo
    imageMode(CENTER);
    image(this.cannon_image,0,0, this.width, this.height);
    pop();
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
