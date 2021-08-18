<template>
    <li class="mb-1">
        <div class="row no-gutters">
            <div class="col"><input type="text" class="form-control" autocomplete="off" :placeholder="placeholder"></div>
            <div class="col-auto">
                <div class="text-nowrap d-flex">
                    <button class="btn btn-light btn-action ml-1" @click="add"><i class='bx bx-plus'></i></button>
                    <button class="btn btn-light btn-action ml-1" @click="remove"><i class='bx bx-x'></i></button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['placeholder', 'index', 'length'],
    methods: {

        add(){
            this.$emit('add')
        },

        remove(){
            this.$emit('remove', this.index)
        }
    }
}
</script>