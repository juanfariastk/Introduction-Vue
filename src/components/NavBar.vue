<template>
    <nav>
        <span>Vue NavBar</span>
        <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Sobre</a></li>
            <li> <a href="#">Login</a></li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped>
nav {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(240, 240, 240);
}

ul {
    display: flex;
    list-style: none;
}

li {
    padding: 0 10px;
}

ul li a {
    text-decoration: none;
    color: rgb(37, 78, 131);
}
</style>