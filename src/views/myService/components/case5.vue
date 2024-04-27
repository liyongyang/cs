<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ t('server_case5.title') }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_5_1.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf1.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf1.card" :key="index">
					<img :src="`/myService/icons/detail5_` + index + `.png`" alt="">
					<li class="item-tit">{{ item.tit }}</li>
					<li v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf2.title }}</li>
			<div class="cards">
				<div class="card2" v-for="(item, index) in pageInfo.conf2.card" :key="index">
					<li class="item-num">{{ item.num }}</li>
					<li class="item-tit">{{ item.tit }}</li>
					<li v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf3.title }}</li>
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf3.card" :key="index">
					<img :src="`/myService/icons/detail5_2_` + index + `.png`" alt="">
					<li class="item-tit">{{ item.tit }}</li>
					<li class="item-txt" v-for="(t, idx) in item.msg" :key="idx">{{ t }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<div class="cards2">
				<img class="conf4-img" :src="t('server_case5.img[0]')" alt="">
				<li class="item-tip">{{ pageInfo.conf4.msg }} </li>
			</div>
			<div class="cards3">
				<div class="card3" v-for="(item, index) in pageInfo.conf4.cards" :key="index">
					<div class="item-tit">{{ item.tit }}</div>
					<div class="item-txt">{{ item.txt }}</div>
				</div>
			</div>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_5_2.png" alt="">
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<img class="img" :src="t('server_case5.img[1]')" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<img class="img" :src="t('server_case5.img[2]')" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf7.title }}</li>
			<li class="conf7-msg" v-for="(t, idx) in pageInfo.conf7.msg" :key="idx">{{ t }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf8.title }}</li>
			<img class="img" :src="t('server_case5.img[3]')" alt="">
			<div class="conf8-msg" v-for="(item, idx) in pageInfo.conf8.msg" :key="idx">
				<li v-for="(t, idx) in item" :key="idx">{{ t }}</li>
			</div>
			<img class="img" :src="t('server_case5.img[4]')" alt="">
			<img class="img" :src="t('server_case5.img[5]')" alt="">

		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf9.title }}</li>
			<div class="person-card">
				<img v-for="(item, index) in pageInfo.img_cards" :key="index" :src="item" alt="">
			</div>
			<li class="title2">{{ pageInfo.conf9.title2 }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf10.title }}</li>
			<div class="cards4">
				<img v-for="(item, index) in pageInfo.img_cards2" :key="index" :src="item" alt="">
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const pageInfo = {
	img_cards: [
		t('server_case5.img_card[0]'),
		t('server_case5.img_card[1]'),
		t('server_case5.img_card[2]'),
		t('server_case5.img_card[3]'),
		t('server_case5.img_card[4]'),
		t('server_case5.img_card[5]'),
		t('server_case5.img_card[6]'),
		t('server_case5.img_card[7]'),
	],
	img_cards2: [
		t('server_case5.img_card2[0]'),
		t('server_case5.img_card2[1]'),
		t('server_case5.img_card2[2]'),
		t('server_case5.img_card2[3]'),
	],
	conf1: {
		title: t('server_case5.conf1.title'),
		card: [
			{
				tit: t('server_case5.conf1.card[0].tit'),
				msg: [
					t('server_case5.conf1.card[0].msg[0]'),
					t('server_case5.conf1.card[0].msg[1]'),
					t('server_case5.conf1.card[0].msg[2]'),
				],
			},
			{
				tit: t('server_case5.conf1.card[1].tit'),
				msg: [
					t('server_case5.conf1.card[1].msg[0]'),
					t('server_case5.conf1.card[1].msg[1]'),
					t('server_case5.conf1.card[1].msg[2]'),
				],
			},
			{
				tit: t('server_case5.conf1.card[2].tit'),
				msg: [
					t('server_case5.conf1.card[2].msg[0]'),
					t('server_case5.conf1.card[2].msg[1]'),
					t('server_case5.conf1.card[2].msg[2]'),
					t('server_case5.conf1.card[2].msg[3]'),
				],
			},
			{
				tit: t('server_case5.conf1.card[3].tit'),
				msg: [
					t('server_case5.conf1.card[3].msg[0]'),
					t('server_case5.conf1.card[3].msg[1]'),
					t('server_case5.conf1.card[3].msg[2]'),
				],
			},
		]
	},
	conf2: {
		title: t('server_case5.conf2.title'),
		card: [
			{
				tit: t('server_case5.conf2.card[0].tit'),
				num: t('server_case5.conf2.card[0].num'),
				msg: [
					t('server_case5.conf2.card[0].msg[0]'),
				],
			},
			{
				tit: t('server_case5.conf2.card[1].tit'),
				num: t('server_case5.conf2.card[1].num'),
				msg: [
					t('server_case5.conf2.card[1].msg[0]'),
				],
			},
			{
				tit: t('server_case5.conf2.card[2].tit'),
				num: t('server_case5.conf2.card[2].num'),
				msg: [
					t('server_case5.conf2.card[2].msg[0]'),
				],
			},
			{
				tit: t('server_case5.conf2.card[3].tit'),
				num: t('server_case5.conf2.card[3].num'),
				msg: [
					t('server_case5.conf2.card[3].msg[0]'),
				],
			},
		]
	},
	conf3: {
		title: t('server_case5.conf3.title'),
		card: [
			{
				tit: t('server_case5.conf3.card[0].tit'),
				msg: [
					t('server_case5.conf3.card[0].msg[0]'),
					t('server_case5.conf3.card[0].msg[1]'),
					t('server_case5.conf3.card[0].msg[2]'),
				],
			},
			{
				tit: t('server_case5.conf3.card[1].tit'),
				msg: [
					t('server_case5.conf3.card[1].msg[0]'),
					t('server_case5.conf3.card[1].msg[1]'),
				],
			},
			{
				tit: t('server_case5.conf3.card[2].tit'),
				msg: [
					t('server_case5.conf3.card[2].msg[0]'),
					t('server_case5.conf3.card[2].msg[1]'),
				],
			},
			{
				tit: t('server_case5.conf3.card[3].tit'),
				msg: [
					t('server_case5.conf3.card[3].msg[0]'),
					t('server_case5.conf3.card[3].msg[1]'),
				],
			},
		]
	},
	conf4: {
		title: t('server_case5.conf4.title'),
		msg: t('server_case5.conf4.msg'),
		cards: [
			{
				tit: t('server_case5.conf4.cards[0].tit'),
				txt: t('server_case5.conf4.cards[0].txt'),
			},
			{
				tit: t('server_case5.conf4.cards[1].tit'),
				txt: t('server_case5.conf4.cards[1].txt'),
			},
			{
				tit: t('server_case5.conf4.cards[2].tit'),
				txt: t('server_case5.conf4.cards[2].txt'),
			},
			{
				tit: t('server_case5.conf4.cards[3].tit'),
				txt: t('server_case5.conf4.cards[3].txt'),
			},
			{
				tit: t('server_case5.conf4.cards[4].tit'),
				txt: t('server_case5.conf4.cards[4].txt'),
			},
			{
				tit: t('server_case5.conf4.cards[5].tit'),
				txt: t('server_case5.conf4.cards[5].txt'),
			},
		]
	},
	conf5: {
		title: t('server_case5.conf5.title'),
	},
	conf6: {
		title: t('server_case5.conf6.title'),
	},
	conf7: {
		title: t('server_case5.conf7.title'),
		msg: [
			t('server_case5.conf7.msg[0]'),
			t('server_case5.conf7.msg[1]'),
			t('server_case5.conf7.msg[2]'),
			t('server_case5.conf7.msg[3]'),
			t('server_case5.conf7.msg[4]'),
			t('server_case5.conf7.msg[5]'),
		]
	},
	conf8: {
		title: t('server_case5.conf8.title'),
		msg: [
			[
				t('server_case5.conf8.msg[0][0]'),
				t('server_case5.conf8.msg[0][1]'),
				t('server_case5.conf8.msg[0][2]'),
				t('server_case5.conf8.msg[0][3]'),
				t('server_case5.conf8.msg[0][4]'),
				t('server_case5.conf8.msg[0][5]'),
				t('server_case5.conf8.msg[0][6]'),
				t('server_case5.conf8.msg[0][7]'),
			],
			[
				t('server_case5.conf8.msg[1][0]'),
				t('server_case5.conf8.msg[1][1]'),
				t('server_case5.conf8.msg[1][2]'),
				t('server_case5.conf8.msg[1][3]'),
				t('server_case5.conf8.msg[1][4]'),
				t('server_case5.conf8.msg[1][5]'),
				t('server_case5.conf8.msg[1][6]'),
				t('server_case5.conf8.msg[1][7]'),
			]
		]
	},
	conf9: {
		title: t('server_case5.conf9.title'),
		title2: t('server_case5.conf9.title2'),
	},
	conf10: {
		title: t('server_case5.conf10.title'),
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
		padding-bottom: 40px;
		font-size: 18px;

		.title {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
		}

		.title2 {
			font-size: 28px;
			line-height: 37px;
			font-weight: 500;
			margin: 40px 0;
			color: #E30214;
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

		.cards2 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 80px;

			.conf4-img {
				width: 479px;
				height: 479px;
			}

			.item-tip {
				width: 485px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
			}
		}

		.cards3 {
			display: flex;
			justify-content: space-between;
			margin: 40px 0;

			.card3 {
				width: auto;
				// flex: 0 0 auto;

				.item-tit {
					display: inline-block;
					width: auto;
					height: 159px;
					text-align: center;
					color: #fff;
					padding: 68px 48px;
					border-radius: 12px;
					background-color: #E30214;
				}

				.item-txt {
					margin-top: 12px;
					line-height: 28px;
					width: 167px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
				}

			}

		}

		.msg {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 36px;
		}

		.conf7-msg {
			line-height: 48px;
		}

		.conf8-msg {
			margin-bottom: 28px;

			>* {
				line-height: 28px;
			}
		}

		.person-card,
		.cards4 {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			>* {
				margin-bottom: 16px;

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
			margin-bottom: 40px;
			padding-bottom: 0;

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.title2 {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.img {
				margin: 8px auto;
				margin-bottom: 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 20px
			}

			.conf7-msg,
			.conf8-msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 10px
			}

			.cards {
				display: block;

				.card {
					margin: 0;
					padding: 0;
					font-size: 14px;
					align-items: center;
					margin-bottom: 28px;

					img {
						width: 48px;
					}

					.item-tit {
						font-size: 16px;
						margin: 0;
					}

					.item-tit {
						font-size: 16px;
						line-height: 24px;
						margin: 8px auto;
					}

					.item-txt {
						width: auto;
					}

					.card-txt {
						margin: 0;
						font-size: 14px;
						line-height: 22px;
					}
				}

				.card2 {
					font-size: 14px;
					width: auto;
					text-align: center;
					margin-bottom: 28px;

					.item-num {
						font-size: 32px;

						line-height: 48px;

						&::after {
							content: '';
							display: block;
							width: 70px;
							height: 2px;
							margin: 0 auto;
							background-color: #E30214;
						}
					}

					.item-tit {
						font-size: 16px;
						line-height: 24px;
						margin: 8px auto;
					}
				}
			}

			.cards2 {
				// display: block;
				padding: 0;

				.conf4-img {
					width: 120px;
					height: auto;
				}

				.item-tip {
					width: 220px;
					font-size: 14px;
					align-items: center;
				}
			}

			.cards3 {
				display: block;
				margin-top: 20px;

				.card3 {
					width: 358px;
					margin-bottom: 12px;

					.item-tit {
						color: #4C4143;
						height: 36px;
						padding: 8px 0;
						border-radius: 0;
						border-bottom: 2px solid #E30214;
						background-color: #e3021500;
					}

					.item-txt {
						width: 358px;
						margin: 4px 0;
						font-size: 14px;
						line-height: 22px;
					}
				}
			}

			.person-card {
				img {
					width: 168px;
					margin-bottom: 28px;
				}
			}

			.cards4 {
				display: block;

				img {
					width: 358px;
					margin-bottom: 12px;
				}
			}
		}
	}
}
</style>
