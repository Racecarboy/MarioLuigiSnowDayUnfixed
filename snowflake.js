class Snowflake {
    constructor(x, y){
      super(x,y,50,50);
      this.snowflakeImg = loadImage("snow5.webp");
    }
  
   display(){
     if(this.snowflakeImg.x > 0 && this.snowflakeImg.x < 1000 && this.snowflakeImg.y > 0 && this.snowflakeImg.y < 500 ){
        this.visibility = 255;
     }
   }
  };