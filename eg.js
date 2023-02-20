<!DOCTYPE html>
<html>
  <head>
    <title>Assignment</title>
  </head>
  <body style=background-color:skyblue>
    <h1>Array properties in javascript</h1>

    <div>
      <h2>Original Array</h2>
      <p id="original-array"></p>
    </div>

    <div>
      <h2>Add 3 & Mapped Array</h2>
      <p id="mapped-array"></p>
    </div>

    <div>
      <h2>Filtered Array</h2>
      <p id="filtered-array"></p>
    </div>

    <div>
      <h2>Sliced Array</h2>
      <p id="sliced-array"></p>
    </div>

    <div>
      <h2>Reversed Array</h2>
      <p id="reversed-array"></p>
    </div>

    <div>
      <h2>Shifted Array</h2>
      <p id="shifted-array"></p>
    </div>

    <div>
      <h2>Fill Array</h2>
      <p id="filled-array"></p>
    </div>

    <script>
      const arr = [1, 2, 3, 4, 5];
      
      document.getElementById("original-array").innerHTML = arr.toString();

      arr.push(6);

      arr.pop();

      const mappedArray = arr.map((element) => element + 3);
      
      document.getElementById("mapped-array").innerHTML = mappedArray.toString();

      const filteredArray = arr.filter((element) => element > 3);
      
      document.getElementById("filtered-array").innerHTML = filteredArray.toString();

      const slicedArray = arr.slice(1, 4);
      
      document.getElementById("sliced-array").innerHTML = slicedArray.toString();

      const reversedArray = arr.reverse();
      
      document.getElementById("reversed-array").innerHTML = reversedArray.toString();

      const shiftedArray = arr.shift();
      
      document.getElementById("shifted-array").innerHTML = shiftedArray.toString();

      const arr2 = new Array(5).fill(0);
      
      document.getElementById("filled-array").innerHTML = arr2.toString();
    </script>
  </body>
</html>
