<template>
    <footer>
        <div>
            <p id="picture">
                <img src="https://avatars2.githubusercontent.com/u/21036470?v=4" alt="profile" />
            </p>
            <p id="description">
                My name is Hassane, I've been coding and creating beautiful stuffs since I was 12.
                I love writing content & code, skateboarding, exploring nature and learning languages.
            </p>
            <p id="links">
                <span>
                    <a href="https://twitter.com/imhassane2" target="_blank" rel="noopener noreferrer">
                        https://twitter.com/imhassane2
                    </a>
                </span>
                <span>
                    <a href="https://instagram.com/imhassane" target="_blank" rel="noopener noreferrer">
                        https://instagram.com/imhassane
                    </a>
                </span>
                <span>
                    <a href="https://sthassane.wordpress.com" target="_blank" rel="noopener noreferrer">
                        https://sthassane.wordpress.com
                    </a>
                </span>
                <span>
                    <a href="mailto:thsow.pro@gmail.com" target="_blank" rel="noopener noreferrer">
                        thsow.pro@gmail.com
                    </a>
                </span>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'app-footer'
}
</script>

<style scoped>
    footer {
        border-top: 1px solid black;
        
        width: 100%;
        margin-top: 10px;
        padding: 20px 0;
        font-size: small;
    }

    footer div {
        width: 50%;
        margin: auto;
    }

    #picture {
        width: 150px;
        margin: auto;
    }

    #picture img {
        width: 100%;
    }

    #description {
        text-align: center;
    }

    #links {
        width: 30%;
        margin: auto;
    }

    #links span {
        display: block;
        text-align: left;
    }

    #links span a {
        font-size: x-small;
        text-transform: none;
    }

    @media (max-width: 450px) {
        #links {
            width: 100%;
        }
    }


</style>