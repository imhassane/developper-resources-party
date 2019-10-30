<template>
    <div id="type-filter">
        <div>
            <span>Filter the ressources</span>
            <select @change="typeChange">
                <option value="">---</option>
                <option value="">All</option>
                <option value="VIDEO">Only videos</option>
                <option value="ARTICLE">Only articles</option>
            </select>
        </div>
        <div>
            <span>
                Current filter options
            </span>
            <span class="option" v-for="(option, key) in options" :key="key">
                {{ option }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'type-filter',
    props: ['options'],
    data: function() {
        return { type: "" }
    },
    methods: {
        typeChange: function(event) {
            this.$emit('type-change', event.target.value)
        }
    }
}
</script>

<style scoped>
    #type-filter {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div span {
        font-weight: bold;
        margin-right: 20px;
    }

    select {
        width: 200px;
        border: 1px solid black;
        text-transform: uppercase;
        color: white;
        background-color: rgba(0, 0, 0, 1);
        margin-right: 30px;
    }

    div .option {
        background-color: black;
        color: white;
        padding: 5px 10px;
        margin-right: 10px;
    }

    @media (max-width: 1120px) {
        #type-filter {
            flex-direction: column;
            align-items: flex-start;
        }

        #type-filter div {
            margin: 10px 0;
        }
    }

    @media (max-width: 450px) {
        #type-filter div span:not(.option) {
            display: block;
        }
    }
</style>