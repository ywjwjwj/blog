<script setup lang="ts">
const { config } = useDocus()
const socialIcons = ref(null)
const icons = computed(() => config.value?.footer?.iconLinks || [])
const textLinks = computed(() => config.value?.footer?.textLinks || [])
const socialIconsCount = computed(() => Object.entries(config.value?.socials || {}).filter(([, v]) => v).length)
const nbSocialIcons = computed(() => (socialIcons.value ? socialIconsCount.value : 0))
</script>

<template>
	<footer>
		<Container :fluid="config?.footer?.fluid" padded class="footer-container">
			<!-- Left -->
			<div class="left">
				<a v-if="config?.footer?.credits" :href="config?.footer?.credits?.href || '#'" rel="noopener"
					target="_blank">
					<!-- <Component :is="config?.footer?.credits?.icon" v-if="config?.footer?.credits?.icon" class="left-icon" /> -->
					<Icon class="mr-1" v-if="config?.footer?.credits?.icon" :name="config?.footer?.credits?.icon" />
					<p v-if="config?.footer?.credits?.text">{{ config.footer.credits.text }}</p>
				</a>
			</div>

			<!-- Center -->
			<div class="center">
				<div class="max-w-4 rounded-full bg-inherit">
					<img src="/image/gongan.png"
						alt="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35090202000355" />
				</div>
				<NuxtLink v-for="link in textLinks" :key="link.href" class="text-link" :aria-label="link.text"
					:href="link.href" :target="link?.target || '_self'" :rel="link?.rel || 'noopener noreferrer'">
					{{ link.text }}
				</NuxtLink>
			</div>

			<!-- Right -->
			<div class="right">
				<a v-for="icon in icons.slice(0, 6 - nbSocialIcons)" :key="icon.label" class="icon-link"
					:aria-label="icon.label" :href="icon.href" target="_blank" :rel="icon?.rel || 'noopener noreferrer'">
					<IconBiTencentQq v-if="icon.BiTencentQq" />
					<IconEmail v-if="icon.email" />
					<div v-if="icon.img" class="avatar my-avatar-icon tooltip" :data-tip="icon.label">
						<!-- <div class="max-w-4 rounded-full ring ring-primary ring-offset-base-100 bg-blue-950 ring-offset-4"> -->
						<nuxt-img height="48px"  class="max-w-4 rounded-full ring ring-primary ring-offset-base-100 bg-blue-950 ring-offset-4" :src="icon.img" :alt="icon.label" />
						<!-- </div> -->
					</div>
					<Icon v-if="icon.icon" :name="icon.icon" />
				</a>
				<AppSocialIcons ref="socialIcons" />
			</div>
			
		</Container>
	</footer>
</template>

<style lang="ts" scoped>
css({
	footer: {
		display: 'flex',
		minHeight: '{docus.footer.height}',
		borderTopWidth: '1px',
		borderTopStyle: 'solid',
		borderTopColor: '{elements.border.primary.static}',
		padding: '{docus.footer.padding}',

		'.footer-container': {

			display: 'grid',
			gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
			justifyItems: 'center',
			gap: '{space.2}',
			'@sm': {
				justifyItems: 'legacy',

			}

			,

			':deep(.icon)': {
				width: '{space.4}',
				height: '{space.4}'
			}

			,

			a: {

				color: '{color.gray.500}',
				'@dark': {
					color: '{color.gray.400}'
				}

				,
				'&:hover': {

					color: '{color.gray.700}',
					'@dark': {
						color: '{color.gray.200}',
					}
				}

				,
			}

			,

			'.left': {
				gridColumn: 'span 12 / span 12',
				display: 'flex',
				py: '{space.4}',
				order: 1,

				'@sm': {
					gridColumn: 'span 3 / span 3',
					order: 0,
				}

				,

				a: {
					display: 'flex',
					alignItems: 'center',
				}

				,

				p: {
					fontSize: '{text.xs.fontSize}',
					lineHeight: '{text.xs.lineHeight}',
					fontWeight: '{fontWeight.medium}'
				}

				,

				'&-icon': {
					flexShrink: 0,
					width: '{space.4}',
					height: '{space.4}',
					fill: 'currentcolor',
					marginRight: '{space.2}',
				}

				,
			}

			,

			'.center': {
				gridColumn: 'span 12 / span 12',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',

				'@sm': {
					gridColumn: 'span 6 / span 6',
					flexDirection: 'row',
					justifyContent: 'center',
				}

				,

				'.text-link': {
					padding: '{space.2}',
					fontSize: '{text.sm.fontSize}',
					lineHeight: '{text.sm.lineHeight}',
					fontWeight: '{fontWeight.medium}'
				}

			}

			,

			'.right': {
				gridColumn: 'span 12 / span 12',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				// marginLeft: 'calc(0px - {space.4})',

				'@sm': {
					gridColumn: 'span 3 / span 3',
					marginRight: 'calc(0px - {space.4})',
				}

				,

				'.icon-link': {
					display: 'flex',
					padding: '{space.4}'
				}

				
			}

			,
		}

		,
	}
}

)
</style>
