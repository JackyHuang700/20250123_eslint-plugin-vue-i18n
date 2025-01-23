<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LOCALE } from '@/i18n'

import TheWelcome from '../components/TheWelcome.vue'

const { t, locale } = useI18n()

const onChangeLocale = (e: Event) => {
  const _target = e.target as HTMLSelectElement
  const _locale = _target.value as LOCALE
  _locale && (locale.value = _locale)
}
</script>

<template>
  <main>

    <select @change="onChangeLocale">
      <option :value="LOCALE.EN_US">English</option>
      <option :value="LOCALE.ZH_TW">繁體中文</option>
    </select>

    <div>
      <div>{{ t('message.goodbye') }}</div>
      <div>{{ t('message.welcome') }}</div>
      <div>{{ t('description2') }}</div>
    </div>

    <template v-if="false">
      <TheWelcome />
    </template>
  </main>
</template>
