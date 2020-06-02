<template>
    <div class="Child">
        <h3>这里是子组件</h3>
        menu 1
        <slot></slot>
        menu 2
        <slot name="menu2"></slot>
        menu 3
        <slot name="menu3"></slot>
    </div>
</template>