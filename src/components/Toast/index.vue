<template>
    <NotificationGroup :group="variant">
      <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none z-50">
        <div class="w-full max-w-sm">
          <Notification
            v-slot="{ notifications, close }"
            enter="ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
          >
            <div
              class="w-full max-w-sm mt-4 overflow-hidden bg-white dark:bg-neutral-900 rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
              :class="{[variantOption[variant].border]: true}"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="p-4">
                <div class="flex items-start alin">
                  <div class="shrink-0 mt-1">
                    <span class="text-xl" :class="{[variantOption[variant].icon]: true, [variantOption[variant].text] : true}"></span>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="font-semibold text-gray-800 dark:text-neutral-200">{{ notification.title }}</p>
                    <p class="text-sm font-semibold text-gray-500 dark:text-neutral-400">{{ notification.text }}</p>
                  </div>
                  <div class="flex ml-4 shrink-0">
                    <button @click="close(notification.id)" class="inline-flex text-gray-400 bg-white dark:bg-neutral-700 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                      <span class="sr-only">Close</span>
                      <span class="i-heroicons-x-mark-20-solid"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  
</template>

<script>
import { notify, Notification, NotificationGroup } from 'notiwind'
export default {
    components: {
        NotificationGroup,
        Notification
    },
    props: {
        variant: {
            type: String,
            default: "default"
        }
    },
    data: () => ({
        variantOption: {
            default: {
                text: 'text-neutral-800 dark:text-neutral-200',
                icon: 'i-heroicons-information-circle',
                border: 'border-0 dark:border dark:border-neutral-700'
            },
            success: {
                text: 'text-green-500 dark:text-green-200',
                icon: 'i-heroicons-check-circle',
                border: 'border-0 dark:border border-green-600 dark:border-green-400'
            },
            danger: {
                text: 'text-red-500 dark:text-red-200',
                icon: 'i-heroicons-x-circle',
                border: 'border-0 dark:border border-red-600 dark:border-red-400'
            },
        }
    })

}
</script>

<style>

</style>