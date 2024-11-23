<script>
    export let cols = "";
</script>

<style>
        p {
        margin-bottom: 0;
    }
    nav {
        background-color: rgb(201, 201, 27);
        position: fixed;
        bottom: 0;
        padding: 20px;
    }
    nav hr {
        width: 100%;
        border: 2px solid black;
        opacity: 1;
        display: none;
    }
    .navContent {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .footerMediaCont {
        display: flex;
        justify-content: space-around;
    }
    .footerMediaCont img {
        width: 30%;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        margin-bottom: 0;
    }
    .headerLogoCont,
    .footerCont,
    ul {
        border: 2px solid black;
    }
    .footerMediaCont img{
        width: 20%;
    }
    .copy {
        height: 5%;
        display: flex;
        justify-content: center;
        align-items: end;
        font-size: 12px;
    }

    @media (min-width: 992px) {
        nav {
            height: 100vh;
            background-color: #fde379;
            border: 1px solid black;
        }
        nav hr {
            display: block;
        }
        .headerLogoCont {
            height: 20%;
        }
        ul {
            height: 65%;
            flex-direction: column;
            justify-content: center;
            font-size: 24px;
        }
    }
</style>

<nav class={cols}>
    <div class="navContent row">
        <div class="headerLogoCont col-3 col-lg-12">
            <h1>Logo</h1>
            <hr />
        </div>

        <ul class="col-5 col-lg-12">
            <li><a href="/informes">Informe</a></li>
            <li><a href="/inventario">Inventario</a></li>
        </ul>

        <div class="footerCont col-4 col-lg-12">
            <hr />
            <div class="footerMediaCont">
                <img
                    src="https://img.icons8.com/ios/452/facebook-new.png"
                    alt="facebook"
                />
                <img
                    src="https://img.icons8.com/ios/452/instagram-new.png"
                    alt="instagram"
                />
                <img
                    src="https://img.icons8.com/ios/452/twitter--v1.png"
                    alt="twitter"
                />
            </div>
        </div>
        <div class="copy col-12">
            <p>© Derechos reservados PokeShop</p>
        </div>
    </div>
</nav>
