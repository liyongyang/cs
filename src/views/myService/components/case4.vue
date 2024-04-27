<template>
	<div class="detail-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('page_server.case4.case_name') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_4_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="msg" v-for="(item, index) in conf1" :key="index">{{ item }}</li>
		</div>
		<li class="h12 wow animate__fadeInUp"></li>

		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<div class="msg" v-for="(item, index) in conf2" :key="index">
				<li v-for="(t, idx) in item" :key="idx">{{ t }}</li>
			</div>
		</div>
		<!-- <li class="h24"></li> -->
		<div class="head-name wow animate__fadeInUp">
			{{ t('page_server.case4.tit1[0]') }}<br />{{ t('page_server.case4.tit1[1]') }}</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img1')" alt="">
		<div class="head-name2 wow animate__fadeInUp">{{ t('page_server.case4.tit2') }}</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img2')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ t('page_server.case4.tit3') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img3')" alt="">
		<div class="head-name wow animate__fadeInUp">
			{{ t('page_server.case4.tit4[0]') }}<br />{{ t('page_server.case4.tit4[1]') }}</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img4')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ t('page_server.case4.tit5') }}</li>
			<li class="msg">{{ t('page_server.case4.txt5_msg') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img4_2')" alt="">
		<div class="head-name wow animate__fadeInUp">{{ t('page_server.case4.tit6') }}</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ t('page_server.case4.tit7') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img5')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="msg">
				{{ t('page_server.case4.txt7_msg1') }}
			</li>
			<li class="msg">
				{{ t('page_server.case4.txt7_msg2') }}
			</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ t('page_server.case4.tit8') }}</li>
			<li class="msg mt8">
				{{ t('page_server.case4.txt8_msg') }}
			</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('page_server.case4.img6')" alt="">
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const conf1 = [
	t('page_server.case4.conf1[0]'),
	t('page_server.case4.conf1[1]'),
	t('page_server.case4.conf1[2]'),
	t('page_server.case4.conf1[3]'),
	t('page_server.case4.conf1[4]'),
	t('page_server.case4.conf1[5]'),
	t('page_server.case4.conf1[6]'),
];
const conf2 = [
	[
		t('page_server.case4.conf2[0][0]'),
		t('page_server.case4.conf2[0][1]'),
		t('page_server.case4.conf2[0][2]'),
		t('page_server.case4.conf2[0][3]'),
	],
	[
		t('page_server.case4.conf2[1][0]'),
		t('page_server.case4.conf2[1][1]'),
		t('page_server.case4.conf2[1][2]'),
		t('page_server.case4.conf2[1][3]'),
		t('page_server.case4.conf2[1][4]'),
		t('page_server.case4.conf2[1][5]'),
	]
]
const goBack = () => {
	router.go(-1)
	// router.push('/service')
}
</script>
<style lang='scss' scoped>
.detail-container {
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
		max-width: 1312px;
		margin: 40px auto;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.title {
			font-size: 28px;
			line-height: 32px;
			font-weight: 500;
		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 28px;
		}
	}

	.head-name {
		font-size: 48px;
		width: 854px;
		margin: 48px auto;
		padding-top: 60px;
		text-align: center;
		line-height: 60px;
		font-weight: 500;
	}

	.head-name2 {
		font-size: 48px;
		margin: 48px auto;
		text-align: center;
		font-weight: 500;
	}
}

@media (max-width: 576px) {
	.detail-container {
		position: relative;
		width: 358px;
		margin: 0 auto;

		.head {
			display: flex;
			align-items: center;
			font-size: 24px;
			line-height: 40px;
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
			width: 358px;
			margin: 12px auto;
		}

		.conf-info {
			width: auto;

			.title {
				font-size: 20px;
				margin-top: 16px;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 24px;
			}
		}

		.head-name {
			width: 358px;
			font-size: 20px;
			line-height: 28px;
			margin: 0;
			padding: 32px 0;
		}

		.head-name2 {
			font-size: 20px;
			margin: 32px auto;
		}
	}
}
</style>
