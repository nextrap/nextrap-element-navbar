# nextrap-element-navbar

## Usage

To use the `NxaNavbar` component, import it in your HTML file:

```html
<script type="module">
  import "./dist/navbar/nxa-navbar.js";
</script>

<style>
  .navbar-example {
    --nxa-header-background: #f6f6f6;
    --nxa-header-topbar-background: #ffffff;
    --nxa-navbar-logo-height: 60px;
  }
</style>

<nxa-navbar
  class="navbar-example"
  data-config='{"stickyOnScroll": true, "hideTopbarOnScroll": true}'
>
  <div class="nxa-topbar nxa-topbar--right" slot="topbar">
    <strong>Exlusive:</strong>
    Get 10 % off your first order!
  </div>
  <div class="nxa-navbar-logo" slot="left">
    <img src="" alt="My Awesome Logo" />
  </div>

  <nav class="nxa-navigation nxa-navigation--right" slot="center">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#/services/">Services</a>
      </li>
      <li>
        <a href="#/about/">About</a>
      </li>
      <li>
        <a href="#/contact/">Contact</a>
      </li>
    </ul>
  </nav>
</nxa-navbar>
```
