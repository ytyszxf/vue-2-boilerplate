<template>
  <div class="page-group">
    <!-- 单个page ,第一个.page默认被展示-->
    <div class="page page-current">

      <!-- 这里是页面内容区 -->
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  /* ============
   * Minimal Layout
   * ============
   *
   * Used for the register and login pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'minimal-layout',
  };
</script>
