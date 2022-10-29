<script setup>
import { useRoute } from "vue-router";
import CommonHeader from '@/components/common-header.vue';
import CommonFooter from '@/components/common-footer.vue';

const router = useRoute()
</script>

<template>
  <div class="h-screen">
    <common-header></common-header>
    <router-view class="min-h-[calc(100vh-315px)] overflow-auto"></router-view>
    <common-footer></common-footer>
  </div>
</template>


