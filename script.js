* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #0f0f0f;
    color: #fff;
    scroll-behavior: smooth;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    position: fixed;
    width: 100%;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 2px;
}

.logo span { color: #ff3e3e; }

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li { margin-left: 30px; }

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 0.9rem;
    transition: 0.3s;
}

.nav-links a:hover { color: #ff3e3e; }

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1500');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    letter-spacing: 1px;
}

.cta-btn {
    padding: 15px 40px;
    background: #fff;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    border-radius: 50px;
    transition: 0.3s;
}

.cta-btn:hover {
    background: #ff3e3e;
    color: #fff;
    box-shadow: 0 0 20px #ff3e3e;
}

/* Products Section */
.products { padding: 100px 5%; }

.section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 50px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.product-card {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    transition: 0.4s;
}

.product-card:hover { transform: translateY(-10px); }

.product-img {
    height: 350px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-bottom: 20px;
}

.buy-btn {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    border: none;
    background: #333;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

.buy-btn:hover { background: #ff3e3e; }
