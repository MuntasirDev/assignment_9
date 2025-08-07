<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Classroom App</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/daisyui"></script>
</head>
<body class="bg-[#fdf6e3] text-gray-800">

  <!-- LOGIN SECTION -->
  <section id="login-section" class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">Login to Classroom</h2>

      <form id="login-form">
        <div class="form-control mb-4">
          <label class="label"><span class="label-text">Email</span></label>
          <input type="email" class="input input-bordered w-full" required />
        </div>

        <div class="form-control mb-4">
          <label class="label"><span class="label-text">Password</span></label>
          <input type="password" class="input input-bordered w-full" required />
        </div>

        <div class="form-control mb-4">
          <label class="label cursor-pointer justify-start gap-2">
            <input type="checkbox" class="checkbox checkbox-sm" />
            <span class="label-text">Remember me</span>
          </label>
        </div>

        <button type="submit" class="btn btn-primary w-full">Login</button>

        <p class="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?
          <a href="#" class="text-blue-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  </section>

  <!-- HOME SECTION -->
  <section id="home-section" class="hidden">
    <!-- Hero Section -->
    <div class="hero min-h-[60vh] bg-cover bg-center" style="background-image: url('./assets/iiuc_cover.jpg');">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-14 text-4xl font-bold">Welcome to Your Virtual Classroom</h1>
          <p class="mb-4 text-lg">Learn from anywhere. Access your classes anytime, anywhere with ease.</p>
        </div>
      </div>
    </div>

    <!-- Intro -->
    <div class="text-center mt-10 px-4">
      <h2 class="text-2xl font-semibold mb-2">Available Classes</h2>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Choose from the list of classes below to begin your learning journey.</p>
    </div>

    <!-- Logout Button -->
    <div class="text-right px-6 mb-4">
      <button onclick="logout()" class="btn btn-outline btn-error btn-sm">Logout</button>
    </div>

    <!-- Classes Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">

  <!-- Class 1 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">Mathematics - Grade 10</h3>
      <p class="text-sm text-gray-600">Explore algebra, geometry, and more with engaging lessons and examples.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 2 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">Physics - Grade 9</h3>
      <p class="text-sm text-gray-600">Learn about motion, forces, energy and the basics of the universe.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 3 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">Chemistry - Grade 10</h3>
      <p class="text-sm text-gray-600">Understand atoms, molecules, reactions and periodic elements.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 4 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">English Literature</h3>
      <p class="text-sm text-gray-600">Dive into poems, plays, and prose from great literary figures.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>


  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">Biology - Grade 8</h3>
      <p class="text-sm text-gray-600">Discover living organisms, human body systems and plant biology.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 6 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">ICT Fundamentals</h3>
      <p class="text-sm text-gray-600">Get introduced to computing, internet basics and digital tools.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 7 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">History & Civics</h3>
      <p class="text-sm text-gray-600">Learn about ancient civilizations, revolutions, and governments.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

  <!-- Class 8 -->
  <div class="card bg-white shadow-lg border">
    <div class="card-body">
      <h3 class="card-title text-lg font-semibold">Geography - Earth Science</h3>
      <p class="text-sm text-gray-600">Study maps, landforms, climate zones and Earth's natural processes.</p>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-primary btn-sm">Watch</button>
      </div>
    </div>
  </div>

</div>


      <!-- Add more class cards here -->

    </div>
  </section>

  <!-- TOGGLING SCRIPT -->
  <script>
    const loginSection = document.getElementById("login-section");
    const homeSection = document.getElementById("home-section");

    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault(); // prevent reload
      loginSection.classList.add("hidden");
      homeSection.classList.remove("hidden");
    });

    function logout() {
      homeSection.classList.add("hidden");
      loginSection.classList.remove("hidden");
    }
  </script>

</body>
</html>
