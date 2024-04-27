<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('server_case3.title') }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title  ">{{ pageInfo.conf1.title }}</li>
			<div class="cards">
				<div class="card " v-for="(item, index) in pageInfo.conf1.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg" v-for="(t, index) in item.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<li class="msg">{{ pageInfo.conf2.info }}</li>
			<img class="img" src="@/assets/myService/detail_3_1.png" alt="">
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf2.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg">{{ item.msg }}</li>
				</div>
			</div>
			<li class="msg">{{ pageInfo.conf2.text }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<div class="cards">
				<div class="card2" v-for="(item, index) in pageInfo.conf3.cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg" v-for="(t, index) in item.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<li class="msg">{{ pageInfo.conf4.info }}</li>
			<div v-for="(item, index) in pageInfo.conf4.items" :key="index">
				<li class="title">{{ index + 1 }} {{ item.name }}</li>
				<div class="cards" v-if="index < 1">
					<div class="card padding2">
						<li class="item-name">{{ item.cards[0].name }}</li>
						<li class="item-msg">{{ item.cards[0].msg }}</li>
					</div>
					<div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[1].name }}</li>
							<li class="item-msg">{{ item.cards[1].msg }}</li>
						</div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[2].name }}</li>
							<li class="item-msg">{{ item.cards[2].msg }}</li>
						</div>
					</div>
				</div>
				<div class="cards" v-else>
					<div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[0].name }}</li>
							<li class="item-msg">{{ item.cards[0].msg }}</li>
						</div>
						<div class="card padding2">
							<li class="item-name item-name2">{{ item.cards[2].name }}</li>
							<li class="item-msg">{{ item.cards[2].msg }}</li>
						</div>
					</div>
					<div class="card padding2">
						<li class="item-name">{{ item.cards[1].name }}</li>
						<li class="item-msg">{{ item.cards[1].msg }}</li>
					</div>
				</div>
			</div>
		</div>
		<div class="conf-info  wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<div class="box-flex">
				<img class="img2" src="@/assets/myService/detail_3_2.png" alt="">
				<div class="info-right">
					<li class="item-msg" v-for="(t, index) in pageInfo.conf5.msg" :key="index">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<li class="item-msg" v-for="(t, index) in pageInfo.conf6.msg" :key="index">{{ t }}</li>
		</div>
		<div class="conf-info  wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6_more[0].name }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf6_more[0].cards" :key="index">
					<li class="item-name">{{ item.name }}</li>
					<li class="item-msg2" v-for="(t, index) in item.msg" :key="index">{{ index + 1 }}. {{ t }}</li>
				</div>
			</div>
			<li class="title">{{ pageInfo.conf6_more[1].name }}</li>
			<li class="item-msg">{{ pageInfo.conf6_more[1].msg }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="pageInfo.conf6_more[1].img" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6_more[2].name }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('server_case3.conf6_more[2].img1')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6_more[2].msg }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('server_case3.conf6_more[2].img2')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6_more[3].name }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('server_case3.conf6_more[3].img1')" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6_more[3].msg }}</li>
		</div>
		<img class="img wow animate__fadeInUp" :src="t('server_case3.conf6_more[3].img2')" alt="">
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const pageInfo = {
	conf1: {
		title: t('server_case3.conf1.title'),
		cards: [
			{
				name: t('server_case3.conf1.cards[0].name'),
				tip: t('server_case3.conf1.cards[0].tip'),
				msg: [
					t('server_case3.conf1.cards[0].msg[0]'),
					t('server_case3.conf1.cards[0].msg[1]'),
				]
			},
			{
				name: t('server_case3.conf1.cards[1].name'),
				tip: t('server_case3.conf1.cards[1].tip'),
				msg: [
					t('server_case3.conf1.cards[1].msg[0]'),
					t('server_case3.conf1.cards[1].msg[1]'),
				]
			},
		]
	},
	conf2: {
		title: t('server_case3.conf2.title'),
		info: t('server_case3.conf2.info'),
		cards: [
			{
				name: t('server_case3.conf2.cards[0].name'),
				msg: t('server_case3.conf2.cards[0].msg'),
			},
			{
				name: t('server_case3.conf2.cards[1].name'),
				msg: t('server_case3.conf2.cards[1].msg'),
			},
		],
		text: t('server_case3.conf2.text'),
	},
	conf3: {
		title: t('server_case3.conf3.title'),
		cards: [
			{
				name: t('server_case3.conf3.cards[0].name'),
				msg: [
					t('server_case3.conf3.cards[0].msg[0]'),]
			},
			{
				name: t('server_case3.conf3.cards[1].name'),
				msg: [
					t('server_case3.conf3.cards[1].msg[0]'),]
			},
			{
				name: t('server_case3.conf3.cards[2].name'),
				msg: [
					t('server_case3.conf3.cards[2].msg[0]'),
					t('server_case3.conf3.cards[2].msg[1]'),
					t('server_case3.conf3.cards[2].msg[2]'),
				]
			},
		]
	},
	conf4: {
		title: t('server_case3.conf4.title'),
		info: t('server_case3.conf4.info'),
		items: [
			{
				name: t('server_case3.conf4.items[0].name'),
				cards: [
					{
						name: t('server_case3.conf4.items[0].cards[0].name'),
						msg: t('server_case3.conf4.items[0].cards[0].msg'),
					},
					{
						name: t('server_case3.conf4.items[0].cards[1].name'),
						msg: t('server_case3.conf4.items[0].cards[1].msg'),
					},
					{
						name: t('server_case3.conf4.items[0].cards[2].name'),
						msg: t('server_case3.conf4.items[0].cards[2].msg'),
					},
				],
			},
			{
				name: t('server_case3.conf4.items[1].name'),
				cards: [
					{
						name: t('server_case3.conf4.items[1].cards[0].name'),
						msg: t('server_case3.conf4.items[1].cards[0].msg'),
					},
					{
						name: t('server_case3.conf4.items[1].cards[1].name'),
						msg: t('server_case3.conf4.items[1].cards[1].msg'),
					},
					{
						name: t('server_case3.conf4.items[1].cards[2].name'),
						msg: t('server_case3.conf4.items[1].cards[2].msg'),
					},
				],
			},
			{
				name: t('server_case3.conf4.items[2].name'),
				cards: [
					{
						name: t('server_case3.conf4.items[2].cards[0].name'),
						msg: t('server_case3.conf4.items[2].cards[0].msg'),
					},
					{
						name: t('server_case3.conf4.items[2].cards[1].name'),
						msg: t('server_case3.conf4.items[2].cards[1].msg'),
					},
					{
						name: t('server_case3.conf4.items[2].cards[2].name'),
						msg: t('server_case3.conf4.items[2].cards[2].msg'),
					},
				],
			},
		]
	},
	conf5: {
		title: t('server_case3.conf5.title'),
		msg: [
			t('server_case3.conf5.msg[0]'),
			t('server_case3.conf5.msg[1]'),
			t('server_case3.conf5.msg[2]'),
			t('server_case3.conf5.msg[3]'),
		]
	},
	conf6: {
		title: t('server_case3.conf6.title'),
		msg: [
			t('server_case3.conf6.msg[0]'),
			t('server_case3.conf6.msg[1]'),
			t('server_case3.conf6.msg[2]'),
		]
	},
	conf6_more: [
		{
			name: t('server_case3.conf6_more[0].name'),
			cards: [
				{
					name: t('server_case3.conf6_more[0].cards[0].name'),
					msg: [
						t('server_case3.conf6_more[0].cards[0].msg[0]'),
						t('server_case3.conf6_more[0].cards[0].msg[1]'),
						t('server_case3.conf6_more[0].cards[0].msg[2]'),
						t('server_case3.conf6_more[0].cards[0].msg[3]'),
						t('server_case3.conf6_more[0].cards[0].msg[4]'),
						t('server_case3.conf6_more[0].cards[0].msg[5]'),
					]
				},
				{
					name: t('server_case3.conf6_more[0].cards[1].name'),
					msg: [
						t('server_case3.conf6_more[0].cards[1].msg[0]'),
						t('server_case3.conf6_more[0].cards[1].msg[1]'),
						t('server_case3.conf6_more[0].cards[1].msg[2]'),
						t('server_case3.conf6_more[0].cards[1].msg[3]'),
					]
				},
			]
		},
		{
			img: t('server_case3.conf6_more[1].img'),
			name: t('server_case3.conf6_more[1].name'),
			msg: t('server_case3.conf6_more[1].msg'),
		},
		{
			name: t('server_case3.conf6_more[2].name'),
			msg: t('server_case3.conf6_more[2].msg'),
		},
		{
			name: t('server_case3.conf6_more[3].name'),
			msg: t('server_case3.conf6_more[3].msg'),
		}
	]
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

		.box-flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
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

				.item-msg {
					padding-bottom: 24px;
				}

				.item-msg2 {
					line-height: 24px;
				}

				.item-name2 {
					padding-bottom: 8px;
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

			.card2 {
				flex: 0 0 auto;
				width: 1312px;
				display: block;
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

				.item-msg {
					padding-bottom: 24px;
				}
			}

			.padding2 {
				padding: 0 32px;
				padding-top: 40px;
				padding-bottom: 24px;
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

		.info-right {
			width: 594px;

			.item-msg {
				font-size: 16px;
				line-height: 24px;
				padding-bottom: 28px;
			}
		}

		.item-msg {
			font-size: 18px;
			line-height: 24px;
			padding-bottom: 28px;
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
			margin-top: 0;
		}

		.conf-info {
			width: auto;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			padding-bottom: 0;

			.title {
				font-size: 18px;
				line-height: 24px;
				font-weight: 500;
				margin: 12px 0;
			}

			.item-msg {
				font-size: 14px;
				padding-bottom: 24px;
			}

			.msg,
			.tip {
				font-size: 14px;
				line-height: 18px;
				margin-bottom: 18px;
			}

			.img {
				width: 358px;
			}

			.box-flex {
				display: block;
				align-items: center;
			}

			.img2 {
				width: 358px;
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

					.item-msg2 {
						font-size: 14px;
						line-height: 24px;
					}

					.item-name2 {
						padding-bottom: 8px;
					}

					.tips-cont {
						display: flex;

						.item-tips {
							margin: 0 16px;
							font-size: 16px;
							line-height: 28px;
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

				.card2 {
					flex: 0 0 auto;
					width: 358px;
					display: block;
					margin-bottom: 10px;
					border-radius: 8px;
					padding: 12px 18px;
					border: 1px solid #B0A7A7;

					.item-name {
						font-size: 16px;
						font-weight: 500;
						padding-bottom: 12px;

						&::before {
							content: '';
							display: inline-block;
							margin-right: 10px;
							width: 3px;
							height: 12px;
							border-radius: 8px;
							background-color: #E30214;
						}
					}

					.item-msg {
						font-size: 14px;
						padding-bottom: 12px;
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

			.info-right {
				width: 358px;

				.item-msg {
					font-size: 14px;
					line-height: 20px;
					padding-bottom: 18px;
				}
			}
		}
	}
}
</style>
