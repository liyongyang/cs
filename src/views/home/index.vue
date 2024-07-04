<template>
	<div>
		<div class="banner">
			<el-carousel trigger="click" height="auto" autoplay @change="handleCarousel" :interval="8000">
				<el-carousel-item class="banner-item" v-for="(item, index) in bannerList" :key="index">
					<img w-full :src="item.img" alt="" class="img-item">
					<div
						:class="['info', 'animate__animated', isFirstEnter && currentCarouselIndex === index ? 'animate__fadeInUp' : '', !isFirstEnter && currentCarouselIndex === index ? 'animate__fadeInUp' : '']">
						<li class="title">{{ item.txt }} </li>
						<li class="msg">{{ item.msg }}</li>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="content">
			<div id="box1Ref" class="box1 wow animate__fadeInUp">
				<li class="title text-8">{{ t('page1.conf1.title') }}</li>
				<li class="msg">{{ t('page1.conf1.tips') }}</li>
			</div>
			<div class="box2 wow animate__fadeInUp">
				<div class="card" @mouseover="activeVector = 0" @mouseleave="activeVector = -1">
					<img :src="activeVector === 0 ? Vector1_act : Vector1" alt=" Icon">
					<li class="txt-1 animate__animated animate__fadeIn">{{ t('page1.conf1.msg[0].txt') }}</li>
					<li class="txt-2 animate__animated animate__fadeIn"><span>{{ t('page1.conf1.msg[0].tips') }}</span></li>
				</div>
				<div class="card" @mouseover="activeVector = 1" @mouseleave="activeVector = -1">
					<img :src="activeVector === 1 ? Vector2_act : Vector2" alt=" Icon">
					<li class="txt-1 animate__animated animate__fadeIn">{{ t('page1.conf1.msg[1].txt') }}</li>
					<li class="txt-2"><span>{{ t('page1.conf1.msg[1].tips') }}</span></li>
				</div>
				<div class="card" @mouseover="activeVector = 2" @mouseleave="activeVector = -1">
					<img :src="activeVector === 2 ? Vector3_act : Vector3" alt=" Icon">
					<li class="txt-1 animate__animated animate__fadeIn">{{ t('page1.conf1.msg[2].txt') }}</li>
					<li class="txt-2 animate__animated animate__fadeIn"><span>{{ t('page1.conf1.msg[2].tips') }}</span></li>
				</div>
				<div class="card" @mouseover="activeVector = 3" @mouseleave="activeVector = -1">
					<img :src="activeVector === 3 ? Vector4_act : Vector4" alt=" Icon">
					<li class="txt-1 animate__animated animate__fadeIn">{{ t('page1.conf1.msg[3].txt') }}</li>
					<!-- animate__animated animate__fadeIn -->
					<li class="txt-2"><span>{{ t('page1.conf1.msg[3].tips') }}</span></li>
				</div>
			</div>
			<div id="box2Ref" class="bg1 wow animate__fadeInUp" :style="{ backgroundImage: `url(${bg1Image})` }"
				style="background-size: 100% 100%;">
				<div class="box1" :class="bg1_MouseMove ? 'box1_active' : 'box1_default'">
					<li class="title" :style="{ opacity: bg1Image != bg1_default ? 0 : 1 }">{{ t('page1.conf1.banner.title') }}
					</li>
					<div class="btn">
						<div class="btn-item" @mouseover="handleMouseMove(language === 'zh' ? bg1_1 : bg1_1_en)"
							@mouseleave="handleMouseLeave()">
							<li>
								{{ t('page1.conf1.banner.msg[0].txt') }}
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
						<div class="btn-item" @mouseover="handleMouseMove(language === 'zh' ? bg1_2 : bg1_2_en)"
							@mouseleave="handleMouseLeave()">
							<li>
								{{ t('page1.conf1.banner.msg[1].txt') }}
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
						<div class="btn-item" @mouseover="handleMouseMove(language === 'zh' ? bg1_3 : bg1_3_en)"
							@mouseleave="handleMouseLeave()">
							<li>
								{{ t('page1.conf1.banner.msg[2].txt') }}
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
					</div>
				</div>
			</div>
			<div id="box3Ref" class="bg2 wow animate__fadeInUp">
				<div class="flex justify-between items-center">
					<li class="title">{{ t('page1.conf2.title') }}</li>
					<li class="toMore" @click="toDetail">{{ t('page1.conf2.more') }}</li>
				</div>

				<div class="card">
					<div class="card-box hvr-grow" v-for="(item, index) in teamList" :key="index">
						<img class="img" :src="item.img" alt="">
						<div class="info">
							<div class="space-y-2">
								<li v-if="language === 'zh'">{{ item.name }}</li>
								<li>{{ item.Ename }}</li>
								<li class="line"></li>
							</div>
							<li class="more">{{ item.more }}</li>
						</div>
					</div>
				</div>
			</div>
			<div id="box4Ref" class="bg3 wow animate__fadeInUp">
				<li class="title">{{ t('page1.conf3.title') }}</li>
				<li class="address">{{ t('page1.conf3.tips') }}</li>
				<div class="card">
					<img class="img" v-full :src="`/home/map.png`">
					<div class="item" v-for="(item, index) in areaList" :key="index" @mouseover="showMapTip(index)">
						<div class="tooltip" :style="'display:' + (activeMap === index ? 'block' : 'none')">{{ item.tooltipText }}
						</div>
						<li class="name">{{ item.name }}</li>
						<li class="address-item">{{ item.address }}</li>
						<li class="msg">{{ item.msg }}</li>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>

import Vector2_act from '@/assets/home/act-vector1.svg?url';
import Vector1_act from '@/assets/home/act-vector2.svg?url';
import Vector3_act from '@/assets/home/act-vector3.svg?url';
import Vector4_act from '@/assets/home/act-vector4.svg?url';
import bg1_1 from '@/assets/home/bg1-1-1.png'; // 导入图片资源
import bg1_2 from '@/assets/home/bg1-1-2.png'; // 导入图片资源
import bg1_3 from '@/assets/home/bg1-1-3.png'; // 导入图片资源
import bg1_1_en from '@/assets/home/bg1-1-1-en.png'; // 导入图片资源
import bg1_2_en from '@/assets/home/bg1-1-2-en.png'; // 导入图片资源
import bg1_3_en from '@/assets/home/bg1-1-3-en.png'; // 导入图片资源
import bg1_default from '@/assets/home/bg1-1.jpeg'; // 导入图片资源
import Vector1 from '@/assets/home/vector1.svg?url';
import Vector2 from '@/assets/home/vector2.svg?url';
import Vector3 from '@/assets/home/vector3.svg?url';
import Vector4 from '@/assets/home/vector4.svg?url';
import { Ref, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const box1Ref = ref(null)
const router = useRouter();
const { t } = useI18n()
const language = ref(useI18n().locale.value)
const timer = ref()
const activeMap = ref(0)
const activeVector = ref(-1)
const bannerList = [
	{
		img: `/img/home/banner1.png`,
		txt: t('page1.banner.title'),
		msg: t('page1.banner.msg.txt1')
	},
	{
		img: `/img/home/banner2.png`,
		txt: t('page1.banner.title'),
		msg: t('page1.banner.msg.txt2'),
	},
	{
		img: `/img/home/banner3.png`,
		txt: t('page1.banner.title'),
		msg: t('page1.banner.msg.txt3'),
	},
	{
		img: `/img/home/banner4.png`,
		txt: t('page1.banner.title'),
		msg: t('page1.banner.msg.txt4'),
	},
	{
		img: `/img/home/banner5.png`,
		txt: t('page1.banner.title'),
		msg: t('page1.banner.msg.txt4'),
	}
]

const teamList = [
	{
		img: `/home/person1.png`,
		name: '吴婷婷',
		Ename: 'TING TING BIO',
		more: t('page1.conf2.msg[0].tips')
	},
	{
		img: `/home/person2.png`,
		name: '',
		Ename: 'Shane McGowan',
		more: t('page1.conf2.msg[1].tips')
	}
]
const areaList = [
	{
		name: t('page1.conf3.msg[0].txt'),
		address: t('page1.conf3.msg[0].location'),
		msg: t('page1.conf3.msg[0].Email'),
		tooltipText: 'Shanghai'
	},
	{
		name: t('page1.conf3.msg[1].txt'),
		address: t('page1.conf3.msg[1].location'),
		msg: t('page1.conf3.msg[1].Email'),
		tooltipText: 'Singapore'
	},
	{
		name: t('page1.conf3.msg[2].txt'),
		address: t('page1.conf3.msg[2].location'),
		msg: t('page1.conf3.msg[2].Email'),
		tooltipText: 'Malaysia'
	},
	{
		name: t('page1.conf3.msg[3].txt'),
		address: t('page1.conf3.msg[3].location'),
		msg: t('page1.conf3.msg[3].Email'),
		tooltipText: 'India'
	},
	{
		name: t('page1.conf3.msg[4].txt'),
		address: t('page1.conf3.msg[4].location'),
		msg: t('page1.conf3.msg[4].Email'),
		tooltipText: 'Australia'
	},
	{
		name: t('page1.conf3.msg[5].txt'),
		address: t('page1.conf3.msg[5].location'),
		msg: t('page1.conf3.msg[5].Email'),
		tooltipText: 'Britain'
	}
]
const bg1Image = ref(bg1_default);
const bg1_MouseMove = ref(false)
onMounted(() => {
	// setTimeout(() => {
	// 	const domName = 'box1Ref';
	// 	const top = document.getElementById(domName).getBoundingClientRect().top
	// 	window.scrollTo(0, top - 104)
	// }, 2000);
});

const showMapTip = (key: number) => {
	activeMap.value = key
}
const handleMouseMove = (idx: any) => {
	bg1Image.value = idx
	bg1_MouseMove.value = true
}
const handleMouseLeave = () => {
	bg1Image.value = bg1_default
	bg1_MouseMove.value = false
}
const toDetail = () => {
	router.push({
		path: 'home/more'
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
onUnmounted(() => {
	timer.value = null
})
/**
 * banner相关逻辑
 */
// 页面是否是第一次进入，第一次进入时banner里的文字动画从上到下展现
const isFirstEnter = ref(true)
let currentCarouselIndex: Ref<number> = ref(0)
const handleCarousel = (index: number) => {
	isFirstEnter.value = false
	currentCarouselIndex.value = index
}
</script>

<style lang='scss' scoped>
$backgroundColor: linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0) 68.22%),
	linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

.banner {
	margin-bottom: 35px;

	.banner-item {
		height: 640px;
	}

	.info {
		color: #fff;
		position: absolute;
		top: 38%;
		left: 120px;

		&.info_animate {
			animation: fadeInUp;
			animation-duration: 2s;
		}

		.title {
			font-size: 48px;
			font-weight: 500;
			line-height: 64px;
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
			width: 640px;
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
		justify-content: space-between;

		.card {
			width: 316px;
			height: 337px;
			border: 1px solid #B0A7A7;
			padding: 32px;
			margin: 0 12px;
			padding-top: 56px;
			border-radius: 12px;
			font-size: 28px;
			line-height: 36px;
			align-items: center;
			transition: all ease-in-out 0.5s;

			.txt-1 {
				margin-top: 12px;
				display: block;
			}

			.txt-2 {
				width: 0;
				opacity: 0;
				margin-top: 12px;
				// display: none;
				overflow: hidden;

				// transition: all ease-in-out 0.5s;
				span {
					display: block;
					width: 420px;
				}
			}

			@keyframes text2 {
				0% {
					width: 0;
					opacity: 0;
				}

				100% {
					width: 420px;
					opacity: 1;
				}
			}

			&:hover {
				color: #fff;
				width: 512px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

				// overflow: hidden;
				.txt-1 {
					margin-top: 12px;
					display: none;
				}

				.txt-2 {
					// width: 420px;
					margin-top: 12px;
					display: block;
					// opacity: 1;
					animation: text2 0.5s ease-in-out forwards;
				}
			}

			.icon {
				width: 112px;
				height: 122px;
			}
		}
	}

	.bg1 {
		width: 100%;
		height: 100%;
		margin-bottom: 40px;
		border-radius: 12px;
		//background-image: url('@/assets/home/bg1-1.jpeg');
		background-repeat: no-repeat center;
		background-size: 100% 100%;
		transition: all 0.6s;

		.box1_active {
			background: none;
		}

		.box1_default {
			background: linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0) 68.22%),
				linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
		}

		.box1 {
			position: relative;
			color: #fff;
			padding: 140px 40px 40px 40px;
			height: 640px;
			width: 100%;
			border-radius: 12px;


			.title {
				margin-top: 64px;
				height: 64px;
				font-size: 50px;
				font-weight: 500;
				line-height: 64px;
				letter-spacing: 0em;
				text-align: left;
			}

			.btn {
				width: 100%;
				margin-top: 18%;
				border-radius: 8px;
				display: flex;
				justify-content: space-between;

				.btn-item {
					cursor: pointer;
					width: 396px;
					height: 112px;
					padding: 20px;
					line-height: 112px;
					font-size: 24px;
					font-weight: 500;
					display: flex;
					justify-content: space-between;
					text-align: center;
					align-items: center;
					border-radius: 8px;
					border: 1px solid #fff;

					&:hover {
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					}
				}
			}
		}
	}

	.bg2 {
		height: 100%;
		padding-bottom: 64px;

		.title {
			padding: 64px 0;
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.toMore {
			cursor: pointer;

			&:hover {
				color: #E30214;
			}
		}

		.card {
			width: auto;
			height: 700px;
			overflow: hidden;
			display: flex;
			transition: all 0.5s ease-in-out;

			.card-box {
				position: relative;
				text-align: center;
				flex: 0 0 auto;
				width: 648px;
				height: 679px;
				margin-right: 16px;
				border-radius: 12px;
				background-color: #f9f9f9;
				border: 1px solid #B0A7A7;

				&:hover {
					transform: scale(0.98);
					box-shadow: 0 16px 16px -12px rgb(0 0 0 / 0.25);
				}

				.img {
					width: auto;
					height: 360px;
					overflow: hidden;
				}

				.info {
					text-align: left;
					height: 310px;
					font-size: 24px;
					font-weight: 500;
					line-height: 40px;
					padding: 39px 48px;
					border-radius: 0 0 12px 12px;
					background-color: #fff;

					.line {
						width: 28px;
						height: 3px;
						border-radius: 8px;
						background: #E30214;
					}

					.more {
						font-size: 20px;
						line-height: 26px;
						font-weight: 400;
						margin-top: 56px;
						width: auto;
						text-wrap: wrap;
						word-wrap: break-word;
						white-space: pre-wrap;
					}
				}
			}

			// }

		}
	}

	.bg3 {
		height: 100%;

		.title {
			font-size: 50px;
			font-weight: 500;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.address {
			font-size: 20px;
			line-height: 26px;
			font-weight: 400;
			margin-top: 20px;
			width: auto;
			padding-bottom: 40px;
		}

		@keyframes tooltip {
			0% {
				opacity: 0;
				transform: translateY(60px) scale(0);
				// animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}

			40% {
				opacity: 1;
				transform: translateY(0) scale(1.3);
				// animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
			}

			100% {
				transform: scale(1);
				// animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}
		}

		.card {
			position: relative;
			margin-top: 12px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			img {
				width: 100%;
			}

			.tooltip {
				position: absolute;
				width: 304px;
				height: 290px;
				background: url('@/assets/home/rectangle1.svg') no-repeat;
				background-size: 100% 100%;
				color: #E30214;
				font-size: 20px;
				font-weight: 400;
				text-align: center;
				padding: 34px 80px 0 81px;
				animation: tooltip 1s ease-in-out forwards;
			}

			.item:nth-child(2) {
				.tooltip {
					left: 889px;
					top: 235px;
				}
			}

			.item:nth-child(3) {
				.tooltip {
					left: 814px;
					top: 304px;
				}
			}

			.item:nth-child(4) {
				.tooltip {
					left: 835px;
					top: 378px;
				}
			}

			.item:nth-child(5) {
				.tooltip {
					left: 717px;
					top: 274px;
				}
			}

			.item:nth-child(6) {
				.tooltip {
					left: 984px;
					top: 502px;
				}
			}

			.item:nth-child(7) {
				.tooltip {
					left: 514px;
					top: 82px;
				}
			}

			.item {
				flex: 0 0 auto;
				width: 426px;
				height: 179px;
				padding: 24px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				border: 1px solid #B0A7A7;

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
				}

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 12px;
				}
			}
		}

		#mapTip {
			position: absolute;
		}
	}
}

@media (max-width: 576px) {
	.banner {
		width: 358px;
		height: 200px;
		margin: 0 auto;

		.banner-item {
			width: 358px;
			height: 200px;
			border-radius: 12px;

			img {
				width: auto;
				height: 100%;
			}
		}

		.info {
			color: #fff;
			position: absolute;
			top: 38%;
			left: 50px;

			.title {
				font-size: 18px;
				font-weight: 500;
				line-height: 24px;
			}

			.msg {
				width: 240px;
				margin-top: 16px;
				font-size: 12px;
				font-weight: 400;
				line-height: 16px;
				letter-spacing: 0em;
				text-align: left;
			}
		}
	}

	.content {
		width: 358px;
		height: 100%;
		margin: 0 auto;

		white-space: pre-wrap;

		.box1 {
			padding-top: 40px;

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
			}
		}

		.box2 {
			padding: 24px 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.card {
				width: 173px;
				height: 110px;
				border: 1px solid #B0A7A7;
				padding: 16px;
				border-radius: 12px;
				font-size: 16px;
				line-height: 20px;
				transition: all 0.5s;
				margin: 8px 0;

				img {
					width: 40px;
				}

				&:hover {
					color: #fff;
					width: 173px;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);

					.txt-1 {
						margin-top: 12px;
						display: block;
					}

					.txt-2 {
						width: 137px;
						margin-top: 12px;
						display: none;
					}
				}

				.txt-1 {
					margin-top: 12px;
					display: block;
				}

				.txt-2 {
					margin-top: 12px;
					display: none;
				}

				.icon {
					width: 51px;
					height: 56px;
				}
			}
		}

		.bg1 {
			width: 100%;
			height: 100%;
			margin-bottom: 24px;
			border-radius: 12px;
			background-image: url('@/assets/home/bg1-1.jpeg');
			background-repeat: no-repeat;
			background-size: 100%;

			.box1 {
				position: relative;
				color: #fff;
				padding: 20px;
				height: 190px;
				width: auto;
				border-radius: 12px;
				background: linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0) 68.22%),
					linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

				.title {
					margin-top: 50px;
					height: 30px;
					font-size: 16px;
					font-weight: 500;
					line-height: 21px;
					letter-spacing: 0em;
					text-align: left;
				}

				.btn {
					width: 100%;
					margin-top: 15%;
					border-radius: 8px;
					display: flex;
					justify-content: space-between;

					.btn-item {
						cursor: pointer;
						width: 100px;
						height: 32px;
						padding: 10px 12px;
						line-height: 21px;
						font-size: 12px;
						font-weight: 500;
						display: flex;
						justify-content: space-between;
						text-align: center;
						align-items: center;
						border-radius: 8px;
						border: 1px solid #fff;

						&:hover {
							background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
						}
					}
				}
			}
		}

		.bg2 {
			height: 100%;
			padding-bottom: 24px;

			.title {
				padding: 12px 0;
				font-size: 16px;
				font-weight: 500;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.toMore {
				font-size: 12px;
			}

			.card {
				width: auto;
				height: 300px;
				overflow-x: auto;
				display: flex;

				.card-box {
					position: relative;
					text-align: center;
					flex: 0 0 auto;
					width: 240px;
					height: 298px;
					margin-right: 8px;
					border-radius: 12px;
					border: 1px solid #B0A7A7;

					&:hover {
						box-shadow: 0 8px 8px -8px rgb(0 0 0 / 0.25);
					}

					.img {
						width: auto;
						height: 121px;
						overflow: hidden;
					}

					.info {
						text-align: left;
						height: 170px;
						font-size: 16px;
						font-weight: 500;
						line-height: 21px;
						padding: 12px;

						.line {
							width: 28px;
							height: 3px;
							border-radius: 8px;
							background: #E30214;
						}

						.more {
							font-size: 12px;
							line-height: 16px;
							font-weight: 400;
							margin-top: 16px;
							width: auto;
							text-wrap: wrap;
							word-wrap: break-word;
							white-space: pre-wrap;
						}
					}
				}
			}
		}

		.bg3 {
			height: 100%;
			margin-bottom: 24px;

			.title {
				font-size: 16px;
				font-weight: 500;
				line-height: 12px;
				letter-spacing: 0em;
				text-align: left;
			}

			.address {
				font-size: 12px;
				line-height: 16px;
				font-weight: 400;
				margin-top: 12px;
				width: auto;
				padding-bottom: 12px;
			}

			.img {
				width: auto;
				height: 201px;
			}

			@keyframes tooltip {
				0% {
					opacity: 0;
					transform: translateY(60px) scale(0);
					// animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}

				40% {
					opacity: 1;
					transform: translateY(0) scale(1.3);
					// animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
				}

				100% {
					transform: scale(1);
					// animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
			}

			.card {
				margin-top: 12px;
				display: flex;
				flex-wrap: wrap;

				.tooltip {
					position: absolute;
					width: 152px;
					height: 145px;
					background: url('@/assets/home/rectangle1.svg') no-repeat;
					background-size: 100% 100%;
					color: #E30214;
					font-size: 12px;
					font-weight: 400;
					text-align: center;
					padding: 12px 40px 0 40px;
					animation: tooltip 1s ease-in-out forwards;
				}

				.item:nth-child(2) {
					.tooltip {
						left: 212px;
						top: 43px;
					}
				}

				.item:nth-child(3) {
					.tooltip {
						left: 191px;
						top: 63px;
					}
				}

				.item:nth-child(4) {
					.tooltip {
						left: 197px;
						top: 83px;
					}
				}

				.item:nth-child(5) {
					.tooltip {
						left: 165px;
						top: 55px;
					}
				}

				.item:nth-child(6) {
					.tooltip {
						left: 238px;
						top: 117px;
					}
				}

				.item:nth-child(7) {
					.tooltip {
						left: 109px;
						top: 1px;
					}
				}

				.item {
					flex: 0 0 auto;
					width: 173px;
					height: 137px;
					padding: 12px;
					margin: 8px 0;
					border-radius: 8px;
					font-size: 12px;
					line-height: 26px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border: 1px solid #B0A7A7;

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					}

					.name {
						font-size: 16px;
						font-weight: 500;
						line-height: 21px;
						margin-bottom: 8px;
					}

					.address-item {
						margin-top: 4px;
						line-height: 20px;
					}
				}
			}
		}
	}
}
</style>
