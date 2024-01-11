<template>
    <footer class="footer">
        <div>
            <ul> Our pages:
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
            
        </div>
        <div>
            <ul>
                Our Contacts:
                <li>RockMerch@email.com</li>
                <li>Phone: +421 111 222</li>
            </ul>
        </div>
    </footer>
</template>
  
<script>

export default {
    name: 'Footer',
};
</script>

  