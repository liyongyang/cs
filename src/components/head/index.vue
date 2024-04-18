<template>
	<div class="head-container">
		<div class="head" v-if="isSmallSize">
			<img src="/img/logo.png" alt="">
			<img src="@/assets/home/menu.png" alt="" @click="showMenubtn">
		</div>
		<div class="head" v-else>
			<img class="cursor-pointer" src="/img/logo.png" alt="" @click="reload">
			<div class="menus">
				<li v-for="(item, index) in  menus" :key="index" :class="activeRoute === index ? 'active-bg' : 'default-bg'"
					class=" menu" @click="changePage(item, i)">
					{{ item.name }}
				</li>
			</div>
			<div class="head-left space-x-2">
				<div class="lang">
					<el-select v-model="locale" placeholder="Select" style="height: 48px;width: 144px" @change="changeLang(v)">
						<el-option label="CN" value="zh" />
						<el-option label="EN" value="en" />
					</el-select>
				</div>
				<div :class="activeRoute === -1 ? 'active-bg' : 'default-bg'" class="btn" @click="toContact">
					<el-icon>
						<Message />
					</el-icon>
					<span class="ml-2.5">{{ t('Email') }}</span>
				</div>
			</div>
		</div>
		<div v-if="showMenu" class="showMenus animate__animated animate__fadeInDown">
			<div>
				<img class="logo" src="/img/logo.png" alt="">
				<li v-for="( item, index ) in  menus " :key="index"
					:class="activeRoute === index ? 'active-menu' : 'defult-menu'" class="menu" @click="changePage(item, index)">
					{{ item.name }}
				</li>
				<li :class="activeRoute === -1 ? 'active-menu' : 'defult-menu'" class="menu" @click="toContact">联系我们</li>
				<!-- <div class="language-box">
					<li class="active-lang def-lang">CN</li>
					<li class="def-lang">EN</li>
				</div> -->
			</div>
			<div class="close" @click="showMenubtn"></div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n()
const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 576)
const activeRoute = ref(-2)
const showMenu = ref(false)
const menus = [
	{
		path: '/home',
		name: t('common.routes.menu1'),
		id: 0
	},
	{
		path: '/service',
		name: t('common.routes.menu2'),
		id: 1
	},
	{
		path: '/customer',
		name: t('common.routes.menu3'),
		id: 2
	},
	{
		path: '/recruit',
		name: t('common.routes.menu4'),
		id: 3
	},
	{
		path: '/joinUs',
		name: t('common.routes.menu5'),
		id: 4
	}
]
watch(route, (v) => {
	window.scrollTo(0, 0);
	document.body.style.overflow = 'auto';
	if (v.path === '/contact') {
		activeRoute.value = -1
	} else {
		const temp = menus.find(l => l.path === v.path)
		console.log(v.path === menus[0].path, temp?.id)
		activeRoute.value = temp?.id || 0
	}
})

const reload = () => {
	router.push({
		path: '/'
	}).then(() => {
		window.location.reload()
	})
}
const showMenubtn = () => {
	showMenu.value = !showMenu.value
	document.body.style.overflow = showMenu.value ? 'hidden' : 'auto';
}
onMounted(() => {
});

const toContact = () => {
	activeRoute.value = -1
	showMenu.value = false
	router.push('/contact');
}
const changeLang = () => {
	localStorage.setItem('locale', locale.value)
	window.location.reload()
}
const changePage = (item: any, i: number) => {
	activeRoute.value = i
	showMenu.value = false
	router.push({
		path: item.path
	});
}
</script>

<style lang='scss' scoped>
.head-container {
	transition: all 0.8s;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background: #fff;
	// background: linear-gradient(to bottom, #ffffff 0%, #ffffffdf 80%, rgba(255, 255, 255, 0.582) 100%);

	.head {
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		padding: 0 64px;
		margin: 12px auto;

		.menus {
			display: flex;
			border: 1px solid #B0A7A7;
			border-radius: 12px;

			.menu {
				font-size: 16px;
				align-items: center;
				cursor: pointer;
				padding: 12px 24px;
				border-radius: 12px;
			}

		}

		.head-left {
			display: flex;
			align-items: center;
		}
	}

	.lang {
		:deep(.el-select) {
			width: 104px !important;
			background-color: #fff;
		}

		:deep(.el-select__wrapper) {
			width: 104px;
			height: 48px;
			line-height: 48px;
			align-items: center;
			cursor: pointer;
			border: 1px solid #B0A7A7;
			box-shadow: none;
			border-radius: 12px;
			padding: 0 20px;
			align-items: center;
			background-color: #fff;
		}

		:deep(.el-select__placeholder) {
			color: #20262e;
		}
		:deep(.el-input) {
			height: 48px;
			
		}
		:deep(.el-input__inner) {
			color:#231C1E;
		}
		:deep(.el-input__wrapper) {
			position: relative;
			border-radius: 12px;
			padding-left:56px;
			box-shadow: 0 0 0 1px #B0A7A7 inset
		}
		:deep(.el-input__suffix){
			position: absolute;
			left:20px;
			svg{
				color:#231C1E;
			}
		}
	}

	.btn {
		display: flex;
		align-items: center;
		width: 144px;
		height: 48px;
		line-height: 48px;
		align-items: center;
		cursor: pointer;
		border: 1px solid #B0A7A7;
		border-radius: 12px;
		padding: 0 20px;
		align-items: center;

		.icon-email {
			margin-right: 6px;
		}
	}
}

@media (max-width: 576px) {
	.head-container {
		.head {
			width: 358px;
			display: flex;
			justify-content: space-between;
			font-weight: 500;
			height: 80px;
			padding: 0;
			margin: 12px auto;

			.logo {
				width: 124px;
				height: 48px;
			}

			.menus {
				display: block;
				border: 1px solid #B0A7A7;
				border-radius: 12px;
				background-color: #fff;

				.menu {
					font-size: 16px;
					line-height: 24px;
					align-items: center;
					cursor: pointer;
					padding: 12px 24px;
					border-radius: 12px;
				}

			}

			.head-left {
				display: flex;
				align-items: center;
			}
		}

		.showMenus {
			width: 100vw;
			height: 100vh;
			text-align: center;
			position: absolute;
			top: 0;
			background-color: #fff;
			z-index: 999;

			.logo {
				width: 124px;
				height: 48px;
				margin: 32px auto;
			}

			.menu {
				width: 358px;
				margin: 0 auto;
				padding: 14px;
			}

			.defult-menu {
				border-bottom: 1px solid #B0A7A7;
			}

			.active-menu {
				color: #E30214;
				border-bottom: 1px solid #E30214;
			}

			.language-box {
				display: flex;
				width: 358px;
				margin: 0 auto;
				margin-top: 40px;
				border: #B0A7A7 solid 1px;
				border-radius: 12px;
				padding: 4px;
				background-color: #f9f9f9;

				.def-lang {
					width: 50%;
					padding: 12px 20px;
				}

				.active-lang {
					color: #fff;
					border-radius: 12px;
					background-color: #E30214;
				}
			}

			.close {
				height: 380px;
				width: auto;
			}
		}

		.btn {
			width: 144px;
			height: 48px;
			padding: 8px 24px;
			cursor: pointer;
			border: 1px solid #B0A7A7;
			border-radius: 12px;
			padding: 10px 20px;
			align-items: center;
		}
	}
}
</style>
