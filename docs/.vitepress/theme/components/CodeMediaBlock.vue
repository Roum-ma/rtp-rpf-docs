<template>
  <div 
    class="code-media-wrapper" 
    :class="{ 'reverse-layout': reverse }"
    :style="{ '--media-w': mediaWidth }"
  >
    <div class="media-container">
      <img 
        v-if="mediaType === 'image' || mediaType === 'gif'" 
        :src="mediaSrc" 
        :alt="altText" 
        :style="{ 'object-fit': objectFit }" 
      />
      <video 
        v-else-if="mediaType === 'video'" 
        :src="mediaSrc" 
        :style="{ 'object-fit': objectFit }"
        autoplay loop muted playsinline>
      </video>
    </div>

    <div class="code-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mediaSrc: {
    type: String,
    required: true
  },
  mediaType: {
    type: String,
    default: 'image'
  },
  altText: {
    type: String,
    default: 'Code demo media'
  },
  reverse: {
    type: Boolean,
    default: false
  },
  mediaWidth: {
    type: String,
    default: '50%' 
  },
  //'cover', 'contain', 'fill', 'scale-down', 'none'
  objectFit: {
    type: String,
    default: 'contain' 
  }
})
</script>

<style scoped>
.code-media-wrapper {
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0;
  align-items: stretch;
}

.code-media-wrapper.reverse-layout {
  flex-direction: row-reverse;
}

.media-container {
  flex: 0 0 var(--media-w);
  max-width: var(--media-w);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center; 
  justify-content: center; /* Центрируем контент */
  background: var(--vp-c-bg-soft);
}

.media-container img,
.media-container video {
  width: 100%;
  height: 100%; /* Медиа занимает весь контейнер */
  display: block;
  /* object-fit задается инлайн-стилем выше */
}

.code-container {
  flex: 1; 
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.code-container :deep(div[class*="language-"]) {
  margin: 0;
}

@media (max-width: 768px) {
  .code-media-wrapper,
  .code-media-wrapper.reverse-layout {
    flex-direction: column;
  }
  .media-container {
    flex: 1 1 auto;
    max-width: 100%; 
    height: 300px; /* Фиксируем высоту для медиа на мобильных, чтобы object-fit работал */
  }
}
</style>