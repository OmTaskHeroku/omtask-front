<template>
  <form>
  <div class="about-card">
    <div class="card-title">
      <img src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png" alt="avatar" class="avatar">
      <div class="title-text-content">
        <h2>Johnathan Doe</h2>
      </div>
    </div>
    <div class="card-content">
      <table style="width:100%">
        <tr>
          <th>Requirement</th>
          <th>Solution</th>
        </tr>
        <tr>
          <td>Design</td>
          <td>PhotoShop, Figma, Canva, Adobe XD</td>
        </tr>
        <tr>
          <td>Front-end</td>
          <td>React.js, Vue.js, Nuxt.js, HTML, CSS, JavaScript</td>
        </tr>
        <tr>
          <td>Back-end</td>
          <td>Node.js, Express.js, Mongo, GraphQL</td>
        </tr>
        <tr>
          <td>ML</td>
          <td>ML5, TensorFlow, Algorithm Design</td>
        </tr>
        <tr>
          <td>Shop</td>
          <td>Stripe, PayFast, E-commerce, CMS</td>
        </tr>
      </table>
      <b>About me</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius consequatur, libero, natus, autem hic saepe exercitationem expedita alias corporis quisquam reiciendis ab quaerat rerum itaque animi repudiandae dolor in fugit ratione inventore molestiae harum accusantium dignissimos. Id praesentium quisquam asperiores ullam quaerat totam, voluptates esse vero repellendus amet, officiis inventore.</p>
      <div class="opinions">
        <table>
          <b>Skills</b>

        </table>

    </div>
    </div>
  </div>

  </form>
</template>

<script>
export default {
  name: "PortfolioMain"
}
</script>

<style>
.about-card{
  margin: auto;
  background: crimson;
  width: auto;
  height: auto;

}
.card-content{
  background: burlywood;
}
/*.card-title{*/
/*  height: 50%;*/
/*  width: 50%;*/
/*  background: black;*/
/*}*/
.avatar {
  width: 50%;
  height: auto;
}

</style>