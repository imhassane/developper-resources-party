<template>
    <div>
        <input type="text" v-model="text" placeholder="Looking for a ressource..." />
        <input type="submit" @click="search" value="Search" />
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    data: function() { return { text: '' } },
    methods: {
        search: function(event) {
            event.preventDefault();
            this.$emit("search", this.text);
        }
    }
}
</script>

<style scoped>
    div {
        padding: 2px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input[type=text] {
        width: 80%;
        height: 35px;
        border: none;
        padding-left: 20px;
    }

    input[type=text]:focus {
        border-bottom: 1px solid silver;
    }

    input[type=submit] {
        background: black;
        color: white;
        padding: 2px 5px;
        border: 1px solid black;
        width: 15%;
        height: 40px;
    }

    @media (max-width: 400px) {
        div {
            display: flex;
            flex-direction: column;
        }

        input {
            margin-bottom: 10px;
        }

        input[type=text] {
            width: 100%;
        }

        input[type=submit] {
            width: 50%;
        }
    }
</style>