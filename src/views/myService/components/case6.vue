<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('server_case6.title') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_6_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf1.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf2.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf3.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf4.msg" :key="index">{{ item }}</li>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const pageInfo = {
	conf1: {
		title: t('server_case6.conf1.title'),
		msg: [
			t('server_case6.conf1.msg[0]')
		]
	},
	conf2: {
		title: t('server_case6.conf2.title'),
		msg: [
			t('server_case6.conf2.msg[0]'),
			t('server_case6.conf2.msg[1]'),
			t('server_case6.conf2.msg[2]'),
			t('server_case6.conf2.msg[3]'),
			t('server_case6.conf2.msg[4]'),
			t('server_case6.conf2.msg[5]'),
			t('server_case6.conf2.msg[6]'),
			t('server_case6.conf2.msg[7]'),
		]
	},
	conf3: {
		title: t('server_case6.conf3.title'),
		msg: [
			t('server_case6.conf3.msg[0]'),
			t('server_case6.conf3.msg[1]'),
			t('server_case6.conf3.msg[2]'),
			t('server_case6.conf3.msg[3]'),
			t('server_case6.conf3.msg[4]'),
			t('server_case6.conf3.msg[5]'),
			t('server_case6.conf3.msg[6]'),
			t('server_case6.conf3.msg[7]'),
			t('server_case6.conf3.msg[8]'),
		]
	},
	conf4: {
		title: t('server_case6.conf4.title'),
		msg: [
			t('server_case6.conf4.msg[0]'),
			t('server_case6.conf4.msg[1]'),
			t('server_case6.conf4.msg[2]'),
			t('server_case6.conf4.msg[3]'),
		]
	}
}
const goBack = () => {
	router.go(-1)
	// router.push('/service')
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

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
		font-size: 18px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.img {
			margin-bottom: 32px;
		}

		.cards {
			display: flex;
			justify-content: space-between;

			.card {
				text-align: center;

				.item-tit {
					font-size: 28px;
					font-weight: 500;
					line-height: 32px;
					margin: 12px auto;
				}

				.item-txt {
					width: 211px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
				}
			}

			.card2 {
				width: 270px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;

				.item-num {
					font-size: 72px;
					font-weight: 500;
					line-height: 80px;

					&::after {
						content: '';
						display: block;
						width: 38px;
						height: 8px;
						margin: 16px 0;
						background-color: #E30214;
					}
				}

				.item-tit {
					font-size: 28px;
					font-weight: 500;
					line-height: 32px;
					margin: 12px auto;
				}
			}
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
			line-height: 64px;
			font-weight: 500;
			padding-bottom: 20px;

			.icon-back {
				position: absolute;
				left: 0;
				font-size: 24px;
				z-index: 9;
			}
		}

		.img {
			width: 358px;
		}

		.conf-info {
			width: 358px;
			margin-bottom: 20px;
			padding-bottom: 0;

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 12px;
			}
		}
	}
}
</style>
