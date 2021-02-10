<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- router link needs to be configured, by using the
            to="" property. Which takes various different values, and the simplest way of using it is to provide a string to it which holds the path you wanna go to. It should be one of the paths you are supporting in your main.js

            We can use a{} (the anchor tag) to style the router-link
           -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

/* USING THE ANCHOR TAG TO STYLE THE ROUTER-LINK */
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>