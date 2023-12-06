
    <template>
     <div class="w-screen h-screen bg-transparent top-0 absolute" @click="closenotif" > 
        <div class="w-fit h-fit relative top-72
            rounded-md bg-[#363636] 
            z-10 ">
            
            <p class="text-white rounded-lg p-3 px-5">
            Your shopping cart is empty !
            </p>
        </div> 
        
    </div>
</template>

<script>
export default {

    methods: {
        closenotif() {
            this.$emit('close-notif');
        },
    }
}
</script>
