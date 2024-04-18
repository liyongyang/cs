<template>
	<div>
		<div class="banner">
			<div v-if="isSmallSize" class="img animate__animated animate__fadeInUp">
				<li class="name">{{ t('common.routes.menu2') }}</li>
				<img w-full src="@/assets/myService/banner-s-1.png" alt="" class="">
				<div class="info animate__animated animate__fadeInUp">
					<li class="title">{{ t('page_server.banner.title') }}</li>
					<li class="msg">{{ t('page_server.banner.msg') }}</li>
				</div>
			</div>
			<div v-else class="img">
				<img w-full src="@/assets/myService/banner.png" alt="" class="">
				<div class="info animate__animated animate__fadeInUp">
					<li class="title">{{ t('page_server.banner.title') }}</li>
					<li class="msg">{{ t('page_server.banner.msg') }}</li>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="box1 wow animate__fadeInUp">
				<li class="title text-8">{{ t('page_server.conf1.title') }}</li>
				<li class="msg">{{ t('page_server.conf1.msg') }}</li>
			</div>
			<div class="box2 wow animate__fadeInUp">
				<div class="card" v-for="(item, index) in cardList" :key="index" @mouseover="activeVector = index"
					@mouseleave="activeVector = -1">
					<img
						:src="activeVector === index ? `/myService/icons/icon_act` + (index + 1) + `.png` : `/myService/icons/icon` + (index + 1) + `.png`"
						alt="icon" class="icon">
					<li class="card-name">{{ item }}</li>
				</div>
			</div>
			<div class="box1 wow animate__fadeInUp">
				<li class="title text-8">{{ t('page_server.conf2.title') }}</li>
				<li class="msg">{{ t('page_server.conf2.msg') }}</li>
			</div>
			<div class="bg1 wow animate__fadeInUp">
				<!-- <div class="box1"></div> -->
				<img class="left-img" src="@/assets/myService/img.png" alt="">
				<div class="btns">
					<div class="btn-items" :style="'margin-top:' + processMarginTop + 'px'">
						<div class="btn-item" v-for="(item, index) in steps" :key="index" @mouseenter="toggleProcess(index, true)"
							@mouseleave="toggleProcess(index, false)">
							<div class="title">
								<li>
									<span class="line"></span>
									<span>{{ item.name }}</span>
								</li>
								<li class="step">Step-0{{ index + 1 }}</li>
							</div>
							<img class="btn-bg" src="/myService/step-bg.png" alt="">
							<div v-for="(t, index) in item.msg" :key="index">
								<li class="txt animate__animated animate__fadeInUp">{{ index + 1 }} {{ t }}</li>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="bg2 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf3.title') }}</li>
				<div class="card" v-for="(item, index) in List" :key="index" @mouseenter="toggleHover(true)"
					@mouseleave="toggleHover(false)" @click="toCase1(index + 1)">
					<div class="left">
						<li class="flex items-center">
							<span class="line"></span>
							<span class="tit">{{ item.title }}</span>
						</li>
						<li class="txt">{{ item.txt }}</li>
					</div>
					<img class="right" :src="item.img" alt="">
				</div>
			</div>
			<div class="bg3 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf4.title') }}</li>
				<img class="img" src="@/assets/myService/banner2.png" alt="">
				<div class="card">
					<div class="item" @click="toDetail('case2')" v-for="(item, index) in list2" :key="index">
						<li class="name">
							<span class="line"></span>
							<span class="tit">{{ item.name }}</span>
						</li>
						<li class="txt">{{ item.txt }}</li>
					</div>
				</div>
			</div>
			<div class="bg4 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf5.title') }}</li>
				<div class="card">
					<div class="item" v-for="(item, index) in list3" :key="index">
						<div>
							<li class="name">
								<span class="line"></span>
								<span class="tit">{{ item.name }}</span>
							</li>
							<li class="txt">{{ item.txt }}</li>
						</div>
						<li class="more" @click="toDetail('case3')">{{ t('page_server.conf5.more') }} </li>
					</div>
				</div>
				<video controls class="img" :poster="`/video/map.jpg`">
					<source src="/video/map.mp4" type="video/mp4">
				</video>
			</div>
			<div class="bg5 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf6.title') }}</li>
				<div class="content">
					<div class="btns">
						<img v-if="isSmallSize" class="img5" src="@/assets/myService/img5.png" alt="">
						<div class="item" v-for="(item, index) in list4" :key="index">
							<div class="left">
								<li class="name">
									<span class="line"></span>
									<span class="tit">{{ item.name }}</span>
								</li>
								<li class="txt">{{ item.txt }}</li>
							</div>
							<li class="more" @click="toDetail('case4')">{{ t('page_server.conf6.more') }} ></li>
						</div>
					</div>
					<img v-if="!isSmallSize" class="img5" src="@/assets/myService/img5.png" alt="">
				</div>
			</div>
			<div class="bg5 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf7.title') }}</li>
				<div class="content">
					<img class="img5" src="@/assets/myService/img6.png" alt="">
					<div class="info5">
						<div>
							<li class="name5">{{ t('page_server.conf7.name') }}</li>
							<li class="txt5-1">{{ t('page_server.conf7.txt1') }}</li>
							<li class="txt5-2">{{ t('page_server.conf7.txt2') }}</li>
						</div>
						<li class="more5" @click="toDetail('case7')">{{ t('page_server.conf7.more') }} ></li>
					</div>
				</div>
			</div>
			<div class="bg6 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf8.title') }}</li>
				<!-- <img class="img5" src="@/assets/myService/banner3.png" alt="" @click="toDetail('case5')"> -->
				<div class="detail" @click="toDetail('case5')">
					<img src="@/assets/myService/Frame182.png" alt="">
					<div class="inner">
						<div class="question">{{ t('page_server.conf8.name') }}</div>
						<div class="desc">{{ t('page_server.conf8.txt1') }}</div>
						<div class="more">{{ t('page_server.conf8.more') }}</div>
					</div>
				</div>
			</div>
			<div class="bg6 wow animate__fadeInUp">
				<li class="title">{{ t('page_server.conf9.title') }}</li>
				<!-- <img class="img5" src="@/assets/myService/banner4.png" alt="" @click="toDetail('case6')"> -->
				<div class="detail" @click="toDetail('case6')">
					<img src="@/assets/myService/Frame509.png" alt="">
					<div class="inner">
						<div class="question">{{ t('page_server.conf9.name') }}</div>
						<div class="desc">{{ t('page_server.conf9.txt1') }}</div>
						<div class="more">{{ t('page_server.conf9.more') }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const { t } = useI18n()

import img2_1 from '@/assets/myService/img2-1.png';
import img2_2 from '@/assets/myService/img2-2.png';
import img2_3 from '@/assets/myService/img2-3.png';

const isSmallSize = ref(window.innerWidth < 576)

const timer = ref()
const activeVector = ref(-1)
const cardList = [
	t('page_server.conf1.cardtxt1'),
	t('page_server.conf1.cardtxt2'),
	t('page_server.conf1.cardtxt3'),
	t('page_server.conf1.cardtxt4'),
	t('page_server.conf1.cardtxt5'),
	t('page_server.conf1.cardtxt6'),
	t('page_server.conf1.cardtxt7'),
	t('page_server.conf1.cardtxt8'),
	t('page_server.conf1.cardtxt9'),
	t('page_server.conf1.cardtxt10'),
	t('page_server.conf1.cardtxt11'),
	t('page_server.conf1.cardtxt12'),
	t('page_server.conf1.cardtxt13'),
	t('page_server.conf1.cardtxt14'),
]
const steps = [
	{
		name: t('page_server.conf2.step[0].name'),
		msg: [
			t('page_server.conf2.step[0].msg[0]'),
			t('page_server.conf2.step[0].msg[1]'),
			t('page_server.conf2.step[0].msg[2]'),
			t('page_server.conf2.step[0].msg[3]'),
		]
	},
	{
		name: t('page_server.conf2.step[1].name'),
		msg: [
			t('page_server.conf2.step[1].msg[0]'),
			t('page_server.conf2.step[1].msg[1]'),
			t('page_server.conf2.step[1].msg[2]'),
			t('page_server.conf2.step[1].msg[3]'),
		]
	},
	{
		name: t('page_server.conf2.step[2].name'),
		msg: [
			t('page_server.conf2.step[2].msg[0]'),
			t('page_server.conf2.step[2].msg[1]'),
			t('page_server.conf2.step[2].msg[2]'),
		]
	},
	{
		name: t('page_server.conf2.step[3].name'),
		msg: [
			t('page_server.conf2.step[3].msg[0]'),
			t('page_server.conf2.step[3].msg[1]'),
			t('page_server.conf2.step[3].msg[2]'),
			t('page_server.conf2.step[3].msg[3]'),
		]
	},
	{
		name: t('page_server.conf2.step[4].name'),
		msg: [
			t('page_server.conf2.step[4].msg[0]'),
			t('page_server.conf2.step[4].msg[1]'),
			t('page_server.conf2.step[4].msg[2]'),
			t('page_server.conf2.step[4].msg[3]'),
			t('page_server.conf2.step[4].msg[4]'),
		]
	},
]

const List = [
	{
		title: t('page_server.conf3.details[0].title'),
		txt: t('page_server.conf3.details[0].txt'),
		img: img2_1
	},
	{
		title: t('page_server.conf3.details[1].title'),
		txt: t('page_server.conf3.details[1].txt'),
		img: img2_2
	},
	{
		title: t('page_server.conf3.details[2].title'),
		txt: t('page_server.conf3.details[2].txt'),
		img: img2_3
	}
]

const list2 = [
	{
		name: t('page_server.conf4.details[0].name'),
		txt: t('page_server.conf4.details[0].txt')
	},
	{
		name: t('page_server.conf4.details[1].name'),
		txt: t('page_server.conf4.details[1].txt')
	}
]
const list3 = [
	{
		name: t('page_server.conf5.details[0].name'),
		txt: t('page_server.conf5.details[0].txt'),
	},
	{
		name: t('page_server.conf5.details[1].name'),
		txt: t('page_server.conf5.details[1].txt'),
	},
	{
		name: t('page_server.conf5.details[2].name'),
		txt: t('page_server.conf5.details[2].txt'),
	},
	{
		name: t('page_server.conf5.details[3].name'),
		txt: t('page_server.conf5.details[3].txt'),
	},
]
const list4 = [
	{
		name: t('page_server.conf6.details[0].name'),
		txt: t('page_server.conf6.details[0].txt'),
	},
	{
		name: t('page_server.conf6.details[1].name'),
		txt: t('page_server.conf6.details[1].txt'),
	},
	{
		name: t('page_server.conf6.details[2].name'),
		txt: t('page_server.conf6.details[2].txt'),
	},
	{
		name: t('page_server.conf6.details[3].name'),
		txt: t('page_server.conf6.details[3].txt'),
	},
]
const isHover = ref(false);

const toggleHover = (data: boolean) => {
	console.log('first---------')
	isHover.value = data;
}
// case1 返回之后滚动的位置
let topArr = [2000, 2380, 2710]
onMounted(() => {
	// timer.value = setInterval(() => {
	// 	active.value < 5 ? active.value++ : active.value = 0
	// 	console.log(active.value)
	// }, 2000)
	// case1 返回之后滚动到之前位置
	if (route.query && route.query.step) {
		window.scrollTo({
			top: topArr[Number(route.query.step) - 1],
		})
	}
});
// case1通过step参数来确定，case1页面点击返回时，回到哪个位置
const toCase1 = (index: number) => {
	router.push({
		path: '/service/case1',
		query: { step: index }
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
const toDetail = (idx: string) => {
	router.push({
		path: `/service/${idx}`
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
// 处理招聘流程和时间表动画
const processMarginTop = ref(0)
let processTimer: any = null
let documentWidth = document.documentElement.clientWidth
const toggleProcess = (index: number, type: boolean) => {
	if (documentWidth > 576 && index === 4) {
		if (type) {
			clearInterval(processTimer)
			processTimer = setTimeout(() => {
				processMarginTop.value = -156
			}, 500)
		} else {
			processMarginTop.value = 0
		}
	} else {
		processMarginTop.value = 0
	}
}
onUnmounted(() => {
	timer.value = null
	processTimer = null
})


</script>

<style lang='scss' scoped>
.banner {
	padding-bottom: 35px;

	.name {
		text-align: center;
		font-size: 24px;
		line-height: 64px;
		font-weight: 500;
	}

	.img {
		height: 100%;
		// width: 100%;
	}

	.info {
		color: #231C1E;
		position: absolute;
		top: 38%;
		left: 50px;


		.title {
			font-size: 48px;
			font-weight: 500;
			line-height: 64px;
			word-wrap: break-word;
			white-space: pre-wrap;
		}

		.msg {
			width: 400px;
			margin-top: 16px;
			font-size: 20px;
			font-weight: 400;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
		}
	}
}

.content {
	width: 1312px;
	height: 100%;
	margin: 0 auto;

	.box1 {
		padding-top: 64px;

		.title {
			height: 64px;
			font-size: 48px;
			font-weight: 500;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;

		}

		.msg {
			width: auto;
			font-size: 20px;
			font-weight: 400;
			line-height: 26px;
			letter-spacing: 0em;
			text-align: left;
			word-wrap: break-word;
			white-space: pre-wrap;
		}
	}

	.box2 {
		padding: 64px 0;
		display: flex;
		flex-wrap: wrap;

		.card {
			flex: 0 0 auto;
			width: 246px;
			height: 197px;
			border: 1px solid #B0A7A7;
			padding: 32px;
			margin: 8px;
			padding-top: 40px;
			border-radius: 12px;
			font-size: 28px;
			line-height: 36px;
			align-items: center;
			text-align: center;
			transition: all 1s;
			color: #fff;

			.icon {
				width: 56px;
				height: 56px;
				margin-top: 35px;
			}

			.card-name {
				display: none;
				word-wrap: break-word;
				white-space: pre-wrap;
			}

			&:hover {
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

				.icon {
					width: 56px;
					height: 56px;
					margin-top: 0;
				}

				.card-name {
					display: block;
					margin-top: 10px;
				}
			}
		}
	}

	.bg1 {
		width: auto;
		height: 100%;
		margin: 40px 0;
		display: flex;
		justify-content: space-between;
		border-radius: 12px;
		background-repeat: no-repeat center;
		background-size: 100% 100%;

		.left-img {
			position: relative;
			width: 656px;
			height: 640px;
			border-radius: 12px;
		}

		.btns {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 640px;
			overflow: hidden;

			// overflow: scroll;
			.btn-items {
				transition: all 0.5s ease-in-out;
			}

			.btn-item {
				position: relative;
				flex: 0 0 auto;
				display: block;
				cursor: pointer;
				width: 640px;
				height: 98px;
				font-size: 24px;
				font-weight: 500;
				border-radius: 8px;
				border: #B0A7A7 1px solid;
				transition: all 0.35s;
				margin-bottom: 37px;
				padding: 0 32px;
				line-height: 90px;
				overflow: hidden;

				.btn-bg {
					display: none;
				}

				.txt {
					display: none;
					opacity: 0;
				}

				&:hover {
					color: #fff;
					height: 256px;
					padding: 24px 32px;
					line-height: 24px;
					background-image: url('/myService/step-bg.png');
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					transition: all 0.5s ease-in-out;

					.btn-bg {
						position: absolute;
						right: 0;
						display: block;
					}

					.title {
						padding-bottom: 24px;

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 20px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.txt {
						display: block;
						font-size: 20px;
						line-height: 32px;
						font-weight: 300;
					}
				}

				.title {
					display: flex;
					justify-content: space-between;
					text-align: center;
					align-items: center;

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: var(--active-color);
					}

					.step {
						font-size: 20px;
						font-weight: 300;
					}
				}

				.txt {
					display: none;
					opacity: 1;
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;

					&:hover {
						display: block;
					}
				}
			}
		}
	}

	.bg2 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			padding: 64px 0;
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			cursor: pointer;
			width: auto;
			height: 317px;
			font-size: 24px;
			font-weight: 500;
			border-radius: 8px;
			border: #B0A7A7 1px solid;
			transition: all 0.35s;
			margin-bottom: 16px;
			padding: 24px 32px;
			line-height: 120px;

			&:hover {
				color: #fff;
				border: 1px solid #E30214;
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

				.left {

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}
			}


			.left {
				width: 800px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}

				.tit {
					font-size: 28px;
					font-weight: 500;
					letter-spacing: 0em;
					text-align: left;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}
			}

			.right {
				width: auto;
				height: 235px;
				margin-top: 24px;
			}
		}
	}

	.bg3 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			cursor: pointer;

			.item {
				flex: 0 0 auto;
				width: 648px;
				height: 320px;
				padding: 40px 40px 40px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				border: 1px solid #B0A7A7;

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 64px;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}
			}
		}
	}

	.bg4 {
		height: 100%;
		padding-bottom: 40px;

		video {
			width: 100%;
			object-fit: cover;
		}

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.item {
				flex: 0 0 auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 648px;
				height: 283px;
				padding: 40px 40px 40px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				border: 1px solid #B0A7A7;

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 20px;
				}

				.txt {
					font-size: 20px;
					line-height: 32px;
					font-weight: 300;
				}

				.more {
					cursor: pointer;
					height: 50px;
					line-height: 50px;
				}

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #fff;
					}
				}

				.line {
					margin-right: 12px;
					display: inline-block;
					width: 3px;
					height: 20px;
					border-radius: 8px;
					background-color: var(--active-color);
				}
			}
		}

		.img {
			border-radius: 12px;
			border: 1px solid #B0A7A7;
		}
	}

	.bg5 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		.content {
			display: flex;
			justify-content: space-between;

			.btns {
				width: 608px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					display: flex;
					justify-content: space-between;
					width: 608px;
					height: 155px;
					font-size: 20px;
					line-height: 26px;
					border-bottom: 1px solid #B0A7A7;

					&:hover {
						.more {
							color: var(--active-color);
						}
					}

					.left {
						width: 400px;
						text-wrap: wrap;
						word-wrap: break-word;
						white-space: pre-wrap;
					}

					.name {
						font-size: 28px;
						font-weight: 500;
						line-height: 36px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 20px;
						line-height: 26px;
						font-weight: 300;
					}

					.more {
						cursor: pointer;
						text-align: right;
						width: 160px;
						height: 50px;
						line-height: 50px;
						margin-top: 40px;
						padding-right: 24px;
					}
				}
			}

			.info5 {
				width: 576px;
				height: 620px;
				display: flex;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				flex-direction: column;
				border-bottom: #B0A7A7 1px solid;
				justify-content: space-between;

				.name5 {
					font-size: 28px;
					line-height: 64px;
				}

				.txt5-1 {
					font-size: 20px;
					line-height: 56px;
				}

				.txt5-2 {
					font-size: 18px;
					line-height: 28px;
					font-weight: 400;
				}

				.more5 {
					cursor: pointer;
					font-size: 20px;
					height: 50px;
					line-height: 50px;

					&:hover {
						color: #E30214;
					}
				}
			}

			.img5 {
				height: 640px;
				width: auto;
				border-radius: 12px;
			}
		}

	}

	.bg6 {
		height: 100%;
		padding-bottom: 40px;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			margin: 64px 0;
			letter-spacing: 0em;
			text-align: left;
		}

		// .img5 {
		// 	cursor: pointer;
		// }
		.detail {
			position: relative;
			cursor: pointer;
			color: #FFF;
			font-weight: 400;

			.inner {
				position: absolute;
				top: 205px;
				left: 64px;
				width: 448px;
				text-align: justify;
			}

			.question {
				font-size: 28px;
			}

			.desc {
				font-size: 20px;
				margin-top: 12px;
				white-space: wrap;
			}

			.more {
				background-color: #fff;
				border-radius: 8px;
				height: 56px;
				width: 160px;
				line-height: 56px;
				text-align: center;
				margin-top: 64px;
				font-size: 16px;
				color: #231C1E;
				transition: all 0.5s linear;

				&:hover {
					font-size: 20px
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.banner {
		width: 358px;
		margin: 0 auto;
		padding-bottom: 32px;

		.img {
			border-radius: 12px;
		}

		.info {
			color: #fff;
			position: absolute;
			top: 50%;
			left: 20px;

			.title {
				font-size: 18px;
				font-weight: 500;
				line-height: 24px;
			}

			.msg {
				width: 240px;
				margin-top: 12px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				letter-spacing: 0em;
				text-align: left;
			}
		}
	}

	.content {
		width: 358px;
		height: 100%;
		margin: 0 auto;

		.box1 {
			padding-top: 0;

			.title {
				height: 32px;
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.msg {
				width: auto;
				font-size: 12px;
				font-weight: 400;
				line-height: 16px;
				letter-spacing: 0em;
				text-align: left;
			}
		}

		.box2 {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 32px;

			.card {
				width: 80px;
				height: 78px;
				border: 1px solid #B0A7A7;
				padding: 12px;
				border-radius: 12px;
				font-size: 14px;
				line-height: 18px;
				transition: all 0.5s;
				margin: 4px;

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.icon {
						width: 24px;
						height: 25px;
						margin-top: 0;
					}

					.card-name {
						display: block;
						margin-top: 0px;
					}
				}

				.icon {
					width: 24px;
					height: 25px;
					margin-top: 12px;
				}
			}
		}

		.bg1 {
			width: auto;
			height: 100%;
			display: block;
			border-radius: 12px;
			background-repeat: no-repeat;
			background-size: 100%;
			margin: 12px 0;
			margin-bottom: 16px;

			.left-img {
				position: relative;
				width: 358px;
				height: 340px;
				border-radius: 12px;
			}

			.btns {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
				overflow: hidden;

				.btn-item {
					flex: 0 0 auto;
					display: block;
					cursor: pointer;
					width: 358px;
					height: 42px;
					font-size: 14px;
					font-weight: 500;
					border-radius: 8px;
					border: #B0A7A7 1px solid;
					transition: all 0.35s;
					margin-bottom: 16px;
					padding: 0 12px;
					line-height: 42px;

					&:hover {
						color: #fff;
						height: 100%;
						padding: 12px;
						line-height: 24px;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.btn-bg {
							width: 80px;
							position: absolute;
							right: 12px;
							display: block;
						}

						.title {
							padding-bottom: 8px;

							.line {
								margin-right: 8px;
								display: inline-block;
								width: 3px;
								height: 12px;
								border-radius: 8px;
								background-color: #fff;
							}
						}

						.txt {
							display: block;
							font-size: 14px;
							line-height: 18px;
							font-weight: 300;
						}
					}

					.title {
						display: flex;
						justify-content: space-between;
						text-align: center;
						align-items: center;

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: var(--active-color);
						}

						.step {
							font-size: 12px;
							font-weight: 300;
						}
					}

					.txt {
						display: none;
						font-size: 20px;
						line-height: 32px;
						font-weight: 300;

						&:hover {
							display: block;
						}
					}
				}
			}
		}

		.bg2 {
			height: 100%;
			padding-bottom: 16px;

			.title {
				padding: 12px 0;
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.card {
				display: flex;
				justify-content: space-between;
				align-items: center;
				cursor: pointer;
				width: auto;
				height: auto;
				font-size: 14px;
				font-weight: 500;
				border-radius: 8px;
				border: #B0A7A7 1px solid;
				transition: all 0.35s;
				margin-bottom: 12px;
				padding: 12px;
				line-height: 18px;

				&:hover {
					color: #fff;
					border: 1px solid #E30214;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.left {

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}
				}


				.left {
					width: 173px;
					line-height: 28px;

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}

					.tit {
						padding: 0;
						font-size: 14px;
						font-weight: 500;
						letter-spacing: 0em;
						text-align: left;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
					}
				}

				.right {
					width: auto;
					height: 94px;
					margin-top: 12px;
				}
			}
		}

		.bg3 {
			height: 100%;
			padding-bottom: 16px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 16px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.img {
				width: 358px;
				height: 100%;
			}

			.card {
				display: block;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					width: auto;
					height: 100%;
					padding: 12px;
					margin: 8px 0;
					border-radius: 8px;
					font-size: 12px;
					line-height: 16px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border: 1px solid #B0A7A7;

					.name {
						font-size: 14px;
						font-weight: 500;
						line-height: 18px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
					}

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}
				}
			}
		}

		.bg4 {
			height: 100%;
			padding-bottom: 32px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 16px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.card {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 358px;
					height: 100%;
					padding: 12px;
					margin: 0;
					font-size: 12px;
					margin-bottom: 12px;
					border-radius: 8px;
					line-height: 16px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border: 1px solid #B0A7A7;

					.name {
						font-size: 14px;
						font-weight: 500;
						line-height: 18px;
						margin-bottom: 12px;
					}

					.txt {
						font-size: 12px;
						line-height: 16px;
						font-weight: 300;
						margin-bottom: 12px;
					}

					.more {
						cursor: pointer;
						height: 16px;
						line-height: 16px;
					}

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

						.line {
							margin-right: 12px;
							display: inline-block;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #fff;
						}
					}

					.line {
						margin-right: 12px;
						display: inline-block;
						width: 3px;
						height: 12px;
						border-radius: 8px;
						background-color: var(--active-color);
					}
				}
			}

			.img {
				width: 358px;
			}
		}

		.bg5 {
			height: 100%;
			padding-bottom: 32px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 12px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.content {
				display: block;

				.btns {
					width: auto;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.item {
						flex: 0 0 auto;
						display: block;
						width: 358px;
						height: 100%;
						font-size: 12px;
						line-height: 16px;
						margin-bottom: 12px;
						border-radius: 12px;
						padding: 12px;
						border: 1px solid #B0A7A7;

						&:hover {
							.more {
								color: var(--active-color);
							}
						}

						.left {
							width: auto;
							text-wrap: wrap;
							word-wrap: break-word;
							white-space: pre-wrap;
						}

						.name {
							font-size: 14px;
							font-weight: 500;
							line-height: 16px;
							margin-bottom: 12px;
						}

						.txt {
							font-size: 12px;
							line-height: 16px;
							font-weight: 300;
						}

						.more {
							cursor: pointer;
							text-align: left;
							width: auto;
							height: 14px;
							line-height: 14px;
							margin-top: 12px;
							padding-right: 24px;
						}
					}
				}

				.info5 {
					width: 358px;
					height: auto;
					display: flex;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					flex-direction: column;
					border-bottom: #B0A7A7 1px solid;
					justify-content: space-between;

					.name5 {
						font-size: 14px;
						line-height: 32px;
					}

					.txt5-1 {
						font-size: 12px;
						line-height: 28px;
					}

					.txt5-2 {
						font-size: 12px;
						line-height: 16px;
						font-weight: 400;
					}

					.more5 {
						cursor: pointer;
						font-size: 12px;
						height: 36px;
						line-height: 36px;

						&:hover {
							color: #E30214;
						}
					}
				}

				.img5 {
					height: auto;
					width: 358px;
					border-radius: 12px;
					margin-bottom: 12px;
				}
			}

		}

		.bg6 {
			height: 100%;
			padding-bottom: 18px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				margin: 12px 0;
				letter-spacing: 0em;
				text-align: left;
			}

			.img5 {
				width: 358px;
			}
		}
	}
}
</style>
