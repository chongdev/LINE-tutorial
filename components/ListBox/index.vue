<template>
    <ul class="list">
        <li-item v-for="(item,i) in items" :key="i" :index="i" :placeholder="placeholder" @remove="removeItem" @add="addItem"></li-item>
    </ul>
</template>

<script>

import LiItem from '~/components/ListBox/LiItem.vue'

export default {
    props: ['placeholder'],
    components: { LiItem },

    data(){
        return{
            items: [],
        }
    },

    mounted(){
        this.addItem();
    },

    methods: {
        addItem(){
            this.items.push({name: ""})
        },
        removeItem(index){

            console.log( this.items.length );
            if( this.items.length > 1 ){
                this.items.splice(index, 1)
            }

            
        }
    }
}
</script>