<template>
  <span :style="{width: `${size}px`, height: `${size}px` }" class="loader dark:border-neutral-200"></span>
</template>

<script>
export default {
    props: {
        size: {
            default: 16
        },
        thick: {
            default: 2
        }
    }

}
</script>

<style lang="css" scoped>

.loader {
    width: 16px;
    height: 16px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>