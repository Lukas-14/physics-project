canvas_size_x = 700;
canvas_size_y = 700;
vector_magnitude = 10;

function setup() {
  //canvas is created
  createCanvas(canvas_size_x, canvas_size_y);
  background(40);
}

function draw() {
  background(40);
  mouse_pos_x = mouseX;
  mouse_pos_y = mouseY;

  //nested for loop creating each vector
  for (let i = 20; i < canvas_size_x; i += 20) {
    for (let j = 20; j < canvas_size_y; j += 20) {
      vector_function(i, j, vector_magnitude, mouse_pos_x, mouse_pos_y);
    }
    j = 20;
  }
  circle(mouse_pos_x, mouse_pos_y, 30);
}

function vector_function(
  x_pos_of_vector_center,
  y_pos_of_vector_center,
  vertor_skale,
  x,
  y
) {
  stroke(255);
  vertor_skale_subtraction = 0;

  //finding the length of the vector using pythagoras
  a = x_pos_of_vector_center - x;
  b = y_pos_of_vector_center - y;
  c = sqrt(pow(a, 2) + pow(b, 2));

  //making the lines that are closest to the mouse dissapear
  if (c <= vertor_skale + 20) {
    stroke(40);
  }

  //creating the size diffrence between the vectors closest and surthest away
  if (c > vertor_skale && c <= 240) {
    vertor_skale_subtraction = c / 30;
  }

  //setting a minimum ammount that can be subtracted from the vector size
  else if (c > 240) {
    vertor_skale_subtraction = 8;
  }

  //the final length of the vector
  vertor_skale_final = vertor_skale - vertor_skale_subtraction;

  //drawing out the final vector
  line(
    x_pos_of_vector_center,
    y_pos_of_vector_center,
    x_pos_of_vector_center - (a / c) * vertor_skale_final,
    y_pos_of_vector_center - (b / c) * vertor_skale_final
  );
  line(
    x_pos_of_vector_center,
    y_pos_of_vector_center,
    x_pos_of_vector_center + (a / c) * vertor_skale_final,
    y_pos_of_vector_center + (b / c) * vertor_skale_final
  );
}
