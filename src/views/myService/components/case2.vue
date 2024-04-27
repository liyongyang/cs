<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('server_case2.title') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_2_1.png" alt="">
		<div class="conf-info">
			<li class="title  wow animate__fadeInUp ">{{ pageInfo.conf1.title }}</li>
			<li class="msg  wow animate__fadeInUp">{{ pageInfo.conf1.msg }}</li>
			<div class="cards  wow animate__fadeInUp">
				<div class="card" v-for="(item, index) in pageInfo.conf1.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-tip" v-for="tip in item.tips" :key="tip">-{{ tip }}</li>
					<li class="item-tip">......</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg">{{ pageInfo.conf2.msg }}</li>
			<li>
				<span class="step" v-for="(item, index) in pageInfo.conf2.steps" :key="index">
					<span class="step-num">{{ index + 1 }}</span>
					<span class="step-key">{{ item }}</span>
				</span>
			</li>
			<div class="cards ">
				<div class="card" v-for="(item, index) in pageInfo.conf2.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<div class="tips-cont">
						<div class="item-tips" v-for="(tip, index) in item.tips" :key="index">
							<div v-for="t in tip" :key="t">
								<li>{{ t }}</li>
							</div>
						</div>
					</div>
				</div>
			</div>
			<li class="msg">{{ pageInfo.conf2.tips }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="pageInfo.conf2.img" alt="">
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();

const pageInfo = {
	conf1: {
		title: t('server_case2.conf1.title'),
		msg: t('server_case2.conf1.msg'),
		cards: [
			{
				name: t('server_case2.conf1.cards[0].name'),
				tips: [
					t('server_case2.conf1.cards[0].tips[0]'),
					t('server_case2.conf1.cards[0].tips[1]'),
					t('server_case2.conf1.cards[0].tips[2]'),
					t('server_case2.conf1.cards[0].tips[3]'),
				]
			},
			{
				name: t('server_case2.conf1.cards[1].name'),
				tips: [
					t('server_case2.conf1.cards[1].tips[0]'),
					t('server_case2.conf1.cards[1].tips[1]'),
					t('server_case2.conf1.cards[1].tips[2]'),
					t('server_case2.conf1.cards[1].tips[3]'),
				]
			}
		]
	},
	conf2: {
		title: t('server_case2.conf2.title'),
		msg: t('server_case2.conf2.msg'),
		steps: [
			t('server_case2.conf2.steps[0]'),
			t('server_case2.conf2.steps[1]'),
			t('server_case2.conf2.steps[2]'),
			t('server_case2.conf2.steps[3]'),
		],
		cards: [
			{
				name: t('server_case2.conf2.cards[0].name'),
				tips: [
					[
						t('server_case2.conf2.cards[0].tips[0][0]'),
						t('server_case2.conf2.cards[0].tips[0][1]'),
						t('server_case2.conf2.cards[0].tips[0][2]'),
						t('server_case2.conf2.cards[0].tips[0][3]'),
					],
					[
						t('server_case2.conf2.cards[0].tips[1][0]'),
						t('server_case2.conf2.cards[0].tips[1][1]'),
						t('server_case2.conf2.cards[0].tips[1][2]'),
						t('server_case2.conf2.cards[0].tips[1][3]'),
					],
					[
						t('server_case2.conf2.cards[0].tips[2][0]'),
						t('server_case2.conf2.cards[0].tips[2][1]'),
						t('server_case2.conf2.cards[0].tips[2][2]'),
						t('server_case2.conf2.cards[0].tips[2][3]'),
					],
					[
						t('server_case2.conf2.cards[0].tips[3][0]'),
						t('server_case2.conf2.cards[0].tips[3][1]'),
						t('server_case2.conf2.cards[0].tips[3][2]'),
						t('server_case2.conf2.cards[0].tips[3][3]'),
					],
				]
			},
			{
				name: t('server_case2.conf2.cards[1].name'),
				tips: [
					[
						t('server_case2.conf2.cards[1].tips[0][0]'),
					],
					[
						t('server_case2.conf2.cards[1].tips[1][0]'),
					],
					[
						t('server_case2.conf2.cards[1].tips[2][0]'),
					],
					[
						t('server_case2.conf2.cards[1].tips[3][0]'),
					],
				]
			},
			{
				name: t('server_case2.conf2.cards[2].name'),
				tips: [
					[
						t('server_case2.conf2.cards[2].tips[0][0]'),
					],
					[
						t('server_case2.conf2.cards[2].tips[1][0]'),
						t('server_case2.conf2.cards[2].tips[1][1]'),
					],
					[
						t('server_case2.conf2.cards[2].tips[2][0]'),
						t('server_case2.conf2.cards[2].tips[2][1]'),
					],
					[
						t('server_case2.conf2.cards[2].tips[3][0]'),
					],
				]
			},
		],
		tips: t('server_case2.conf2.tips'),
		img: t('server_case2.conf2.img')
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

	.img {
		margin-top: 40px;
	}

	.conf-info {
		width: auto;
		text-align: left;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;
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

		.cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.card {
				flex: 0 0 auto;
				width: 648px;
				margin-bottom: 16px;
				border-radius: 8px;
				padding: 40px 32px;
				border: 1px solid #B0A7A7;

				.item-name {
					font-size: 28px;
					font-weight: 500;
					padding-bottom: 32px;

					&::before {
						content: '';
						display: inline-block;
						margin-right: 20px;
						width: 3px;
						height: 20px;
						border-radius: 8px;
						background-color: #E30214;
					}
				}

				.tips-cont {
					display: flex;

					.item-tips {
						margin: 0 16px;
						font-size: 16px;
						line-height: 28px;
					}
				}


			}
		}

		.step {
			display: inline-block;
			font-size: 24px;
			font-weight: 500;
			height: 60px;

			.step-num {
				color: #E30214;
			}

			.step-key {
				color: #4C4143;
				margin: 0 18px;
			}
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

			.cards {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.card {
					flex: 0 0 auto;
					width: 358px;
					margin-bottom: 16px;
					border-radius: 8px;
					padding: 10px 12px;
					border: 1px solid #B0A7A7;

					.item-name {

						font-size: 18px;
						font-weight: 500;
						padding-bottom: 12px;

						&::before {
							content: '';
							display: inline-block;
							margin-right: 10px;
							width: 3px;
							height: 12px;
							border-radius: 4px;
							background-color: #E30214;
						}
					}

					.tips-cont {
						display: flex;

						.item-tips {
							margin: 0 10px;
							font-size: 12px;
							line-height: 18px;
						}
					}


				}
			}

			.step {
				display: inline-block;
				font-size: 24px;
				font-weight: 500;
				width: 160px;
				text-align: center;
				height: 60px;
				line-height: 60px;

				.step-num {
					color: #E30214;
				}

				.step-key {
					color: #4C4143;
					margin: 0 18px;
				}
			}
		}
	}
}
</style>
