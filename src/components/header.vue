<template >
    <div class="header">
        <div class="logo">
        <h1 >MediDrinks</h1>
        <p>Brasília, DF</p>
        <p class="git"> <img src="https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1617242695~hmac=9427f1910948e0bbbcdb1c8dc08dc906" class="imgGit">@ryandls</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.header {
    width: 100vw;
    height: 8vh;
    background: rgb(250, 248, 248);
}
.logo{
    margin-left: 4vh;
    font-size: 10px;
    padding: 6px;
}
.git {
    position: absolute;
    display: flex-block;
    right:0;
}
.imgGit{
    width: 10px;
    height: 10px;
}
</style>