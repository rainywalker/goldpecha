<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
html,body,a,img,dl,dt,dd,div,fieldset,legend,table,thead,th,tr,td,tbody,li,ol,ul,form,section,article,span,em,
figure,figcaption,h1,h2,h3,h4,h5,h6,p,strong{margin:0;padding:0;font-family:Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;}
img, form, fieldset{border:0}
li{list-style: none}
html,body{min-height:100%}
body{overflow-x: hidden}
.blind{font-size: 0;width:0;height:0;opacity: 0;visibility:0;line-height: 0}
</style>
