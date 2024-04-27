<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('server_case1.title') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<li class="msg">{{ pageInfo.conf1.msg }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf1.tips" :key="index">
				{{ index + 1 }}. {{ item }}
			</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_2.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf2.msg" :key="index">
				{{ item }}
			</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_1_3.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<li class="msg">{{ pageInfo.conf3.msg }}</li>
			<li class="tip" v-for="(item, index) in pageInfo.conf3.tips" :key="index">
				{{ index + 1 }}. {{ item }}
			</li>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const route = useRoute();
const pageInfo = {
	conf1: {
		title: t('server_case1.conf1.title'),
		msg: t('server_case1.conf1.msg'),
		tips: [
			t('server_case1.conf1.tips[0]'),
			t('server_case1.conf1.tips[1]'),
			t('server_case1.conf1.tips[2]'),
			t('server_case1.conf1.tips[3]'),
			t('server_case1.conf1.tips[4]'),
			t('server_case1.conf1.tips[5]'),
			t('server_case1.conf1.tips[6]'),
		]
	},
	conf2: {
		title: t('server_case1.conf2.title'),
		msg: [
			t('server_case1.conf2.msg[0]'),
			t('server_case1.conf2.msg[1]')
		],
	},
	conf3: {
		title: t('server_case1.conf3.title'),
		msg: t('server_case1.conf3.msg'),
		tips: [
			t('server_case1.conf3.tips[0]'),
			t('server_case1.conf3.tips[1]'),
			t('server_case1.conf3.tips[2]'),
			t('server_case1.conf3.tips[3]'),
			t('server_case1.conf3.tips[4]'),
		]
	},
}
// 头部返回滚动
let backIconRef = ref<HTMLElement | null>(null)
let backStyle = reactive({
	style: {
		position: 'fixed',
	}
})
const backScroll = () => {
	let backIconHeight = backIconRef.value!.getBoundingClientRect().top
	// 获取滚动条的高度
	let scrollTop = document.documentElement.scrollTop
	if (scrollTop > 0) {
		backStyle.style = {
			position: 'fixed',
			top: backIconHeight + 'px'
		}
	} else {
		backStyle.style = {
			position: 'relative',
			top: '0'
		}
	}
}
onMounted(() => {
	// window.addEventListener('scroll', backScroll);
});
onUnmounted(() => {
	// window.removeEventListener('scroll', backScroll)
})
const goBack = () => {
	// router.go(-1)
	console.log(route.query?.step)
	router.push({
		path: `/service`,
		query: { step: route.query?.step || '' }
	})
}
</script>
<style lang='scss' scoped>
.qa-container {
	width: 1312px;
	margin: 0 auto;
	text-align: center;
	color: #4C4143;

	.head {
		display: flex;
		align-items: center;
		font-size: 48px;
		line-height: 63px;
		font-weight: 500;
		padding-bottom: 40px;

		.icon_wrap {
			flex: 0 0 auto;
			height: 80px;
			width: 80px;
			cursor: pointer;
			background: #fff;
			text-align: center;
			border-radius: 100%;

			&:hover {
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

				span {
					margin-right: 6px;
					opacity: 1;
					display: inline;
				}
			}

			span {
				opacity: 0;
				display: none;
				position: relative;
				font-size: 18px;
				transition: all 0.5s ease-in-out;
			}

		}

		.icon-back {
			display: inline-block;
			font-size: 32px;
			vertical-align: sub;
		}
	}

	.img {
		margin-top: 40px;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		padding-bottom: 40px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 36px;
		}
	}
}

@media (max-width: 576px) {
	.qa-container {
		position: relative;
		width: 358px;
		margin: 0 auto;

		.head {
			display: flex;
			align-items: center;
			font-size: 24px;
			line-height: 30px;
			font-weight: 500;
			padding-bottom: 12px;

			.icon-back {
				position: absolute;
				left: 0;
				font-size: 24px;
				z-index: 9;
			}
		}

		.img {
			width: 340px;
			margin-top: 16px;
		}

		.conf-info {
			width: auto;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			padding-bottom: 16px;

			.title {
				font-size: 18px;
				line-height: 24px;
				font-weight: 500;
				margin: 20px 0;
			}

			.msg,
			.tip {
				font-size: 12px;
				line-height: 18px;
				margin-bottom: 18px;
			}
		}
	}
}
</style>
