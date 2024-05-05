<template>
	<div class="join-container">
		<div class="banner">
			<div v-if="isSmallSize" class="animate__animated animate__fadeInUp">
				<li class="name">{{ t('common.routes.menu5') }}</li>
				<img src="/joinUs/banner-s-1.png" alt="" class="" />
			</div>
			<div v-else class="img">
				<img w-full src="/joinUs/banner.png" alt="" class="" />
				<div class="info animate__animated animate__fadeInUp">
					<li class="title">{{ t('page_joinUs.banner.title') }}</li>
					<li class="msg text-wrap">{{ t('page_joinUs.banner.msg') }}</li>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="head wow animate__fadeInUp">
				<li class="tab" :class="active === index ? 'active-tab' : ''" v-for="(item, index) in tab" :key="index"
					@click="active = index">
					{{ item }}
				</li>
			</div>
			<div v-if="active === 0" class="tab-box">
				<li class="title wow animate__fadeInUp">{{ t('page_joinUs.conf1.title') }}</li>
				<div class="conf1 wow animate__fadeInUp">
					<el-carousel :interval="40000" type="card" class="carousel-imgs">
						<el-carousel-item v-for="(item, index) in 10" :key="item">
							<img :src="`/joinUs/us` + index + `.png`" alt="" />
						</el-carousel-item>
					</el-carousel>
				</div>

				<li class="title wow animate__fadeInUp">{{ t('page_joinUs.conf1.title2') }}</li>
				<div class="conf2 wow animate__fadeInUp">
					<!-- <div class="card" v-for="(item, index) in conf2Card" :key="index" @click="handleDetail(index)">
						<img class="img" :src="`/joinUs/conf2-` + index + `.png`" alt="" />
						<div class="msg">
							<li class="line"></li>
							<li class="txt">{{ item }}</li>
						</div>
					</div> -->
					<el-carousel :interval="40000" :autoplay="false" class="carousel-imgs" height="351px">
						<el-carousel-item v-for="(item, index) in conf2Card" :key="index">
							<div class="card" v-for="(child, i) in item" @click="handleDetail(index)">
								<img class="img" :src="`/joinUs/conf2-` + ((index + 1) * i) + `.png`" alt="" />
								<div class="msg">
									<li class="line"></li>
									<li class="txt">{{ child }}</li>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>
				</div>

				<li class="title wow animate__fadeInUp">{{ t('page_joinUs.conf1.title3') }}</li>
				<div class="conf3 wow animate__fadeInUp">
					<li>
						{{ t('page_joinUs.conf1.desc') }}
					</li>
					<img class="conf3-img" src="/joinUs/conf3.png" alt="" />
				</div>

				<li class="title wow animate__fadeInUp">Mother and care</li>
				<img class="conf4-img wow animate__fadeInUp" :src="t('page_joinUs.conf1.img')" alt="" />

				<li class="title wow animate__fadeInUp">{{ t('page_joinUs.conf1.title4') }}</li>
				<div class="conf5 wow animate__fadeInUp">
					<div class="card" v-for="(item, index) in articleList" :key="index" @click="toArticle(index)">
						<li class="article-title">{{ item.title }}</li>
					</div>
				</div>
			</div>
			<div v-else class="tab-jd">
				<div class="jd-content wow animate__fadeInUp">
					<li class="jd-title">{{ t('page_joinUs.conf2.title') }}</li>
					<div class="list">
						<div class="item-conf" v-for="(item, index) in list" :key="item.name" @click="handlActive(index)">
							<li class="item-conf-head">
								{{ item.name }}
							</li>
							<div class="item-conf-jd">
								<li class="tips" v-if="item.conf.tip">{{ t('page_joinUs.conf2.tip') }}</li>
								<li class="desc" v-for="(t, index) in item.conf.tip" :key="index">
									{{ t }}
								</li>
								<li class="tips" v-if="item.conf.jd1">{{ t('page_joinUs.conf2.jd1') }}</li>
								<li class="desc" v-for="(t, index) in item.conf.jd1" :key="index">
									{{ index + 1 }}. {{ t }}
								</li>
								<li class="tips" v-if="item.conf.jd2">{{ t('page_joinUs.conf2.jd2') }}</li>
								<li class="desc" v-for="(t, index) in item.conf.jd2" :key="index">
									{{ index + 1 }}. {{ t }}
								</li>
								<li class="tips" v-if="item.conf.jd3">{{ t('page_joinUs.conf2.jd3') }}</li>
								<li class="desc" v-for="(t, index) in item.conf.jd3" :key="index">
									{{ index + 1 }}. {{ t }}
								</li>
								<span v-if="!isSmallSize" class="jd-create">{{ t('page_joinUs.conf2.timeText') }}{{ item.time }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="active === 1" class="join-qa wow animate__fadeInUp" @click="toQA">
				<img src="/joinUs/img-qa.png" alt="" />
			</div>
		</div>
		<el-dialog class="my-dialog" v-model="showDetail" align-center>
			<div class="content">
				<el-icon class="close" @click="showDetail = false">
					<CloseBold />
				</el-icon>
				<img class="dia-img" :src="`/joinUs/conf2-` + activeDetail + `.png`" alt="" />
				<div class="dia-msg">
					<li class="line"></li>
					<li class="txt">{{ conf2CardDetail[activeDetail] }}</li>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";
const { t } = useI18n()
const router = useRouter();

const isSmallSize = ref(window.innerWidth < 576)
const tab = [
	t('page_joinUs.type[0]'),
	t('page_joinUs.type[1]'),
]
const active = ref(0)
const conf2Card = [
	[
		t('page_joinUs.conf1.card[0]'),
		t('page_joinUs.conf1.card[1]'),
		t('page_joinUs.conf1.card[2]'),
		t('page_joinUs.conf1.card[3]'),
	],
	[
		t('page_joinUs.conf1.card[4]'),
		t('page_joinUs.conf1.card[5]'),
		t('page_joinUs.conf1.card[6]'),
		t('page_joinUs.conf1.card[7]'),
	],
]
const showDetail = ref(false)
const activeDetail = ref(0)
const conf2CardDetail = [
	t('page_joinUs.conf1.details[0]'),
	t('page_joinUs.conf1.details[1]'),
	t('page_joinUs.conf1.details[2]'),
	t('page_joinUs.conf1.details[3]'),
	t('page_joinUs.conf1.details[4]'),
	t('page_joinUs.conf1.details[5]'),
	t('page_joinUs.conf1.details[6]'),
	t('page_joinUs.conf1.details[7]'),
]
const articleList = [
	{
		title: 'Csuite分享 | 创业: 走出舒适圈的征程',
	},
	{
		title: '再给我五年，我要成为这个行业的专家',
	},
	{
		title: '中国这40年之我见-沈达理(Shane Tedjarati)',
	},
	{
		title: '学做一个会沟通的人',
	},
	{
		title: '格局打开，交一个猎头朋友',
	},
	{
		title: '金三银四真的是金三银四么？',
	},
]
const list = ref([
	{
		name: t('page_joinUs.conf2.jdDetails[0].name'),
		time: '2023-08-25',
		conf: {
			jd1: [
				t('page_joinUs.conf2.jdDetails[0].conf.jd1[0]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd1[1]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd1[2]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd1[3]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd1[4]')
			],
			jd2: [
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[0]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[1]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[2]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[3]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[4]'),
				t('page_joinUs.conf2.jdDetails[0].conf.jd2[5]'),
			]
		}
	},
	{
		name: t('page_joinUs.conf2.jdDetails[1].name'),
		time: '2023-08-25',
		conf: {
			jd1: [
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[0]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[1]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[2]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[3]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[4]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[5]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd1[6]'),
			],
			jd2: [
				t('page_joinUs.conf2.jdDetails[1].conf.jd2[0]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd2[1]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd2[2]'),
				t('page_joinUs.conf2.jdDetails[1].conf.jd2[3]'),
			]
		}
	},
	{
		name: t('page_joinUs.conf2.jdDetails[2].name'),
		time: '2023-08-25',
		conf: {
			jd3: [
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[0]'),
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[1]'),
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[2]'),
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[3]'),
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[4]'),
				t('page_joinUs.conf2.jdDetails[2].conf.jd3[5]'),
			]
		}
	},
	{
		name: t('page_joinUs.conf2.jdDetails[3].name'),
		time: '2023-08-25',
		conf: {
			jd1: [
				t('page_joinUs.conf2.jdDetails[3].conf.jd1[0]'),

				t('page_joinUs.conf2.jdDetails[3].conf.jd1[1]'),

				t('page_joinUs.conf2.jdDetails[3].conf.jd1[2]'),

				t('page_joinUs.conf2.jdDetails[3].conf.jd1[3]'),

				t('page_joinUs.conf2.jdDetails[3].conf.jd1[4]'),

				t('page_joinUs.conf2.jdDetails[3].conf.jd1[5]'),

			],
			jd2: [
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[0]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[1]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[2]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[3]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[4]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[5]'),
				t('page_joinUs.conf2.jdDetails[3].conf.jd2[6]'),
			]
		}
	},
])
onMounted(() => {
});
const toQA = () => {
	router.push({
		path: '/joinUs/qa'
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
const toArticle = (index: number) => {
	router.push({
		path: `/joinUs/pg` + (+index + 1)
	}).then(() => {
		window.scrollTo(0, 0);
	})
}
const handleDetail = (idx: number) => {
	showDetail.value = true
	activeDetail.value = idx
}

</script>

<style lang='scss' scoped>
.join-container {
	.banner {
		padding-bottom: 64px;

		.name {
			text-align: center;
			font-size: 24px;
			line-height: 64px;
			font-weight: 500;
		}

		.img {
			height: 100%;
		}

		.info {
			color: #fff;
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
			}
		}
	}

	.content {
		width: 1312px;
		height: 100%;
		margin: 0 auto;

		.head {
			display: flex;
			justify-content: space-around;
			font-size: 24px;
			line-height: 68px;
			border-bottom: 1px solid #cdc6c6;

			.tab {
				cursor: pointer;
				width: 470px;
				text-align: center;
				border-bottom: none;
			}

			.active-tab {
				border-bottom: 2px solid #e30214;
			}
		}

		.tab-box {
			width: auto;
			font-size: 20px;
			line-height: 32px;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;

			.title {
				font-size: 48px;
				line-height: 63px;
				font-weight: 500;
				padding: 48px 0;
			}

			.conf1 {
				padding-top: 10px;

				.carousel-imgs {
					width: auto;

					:deep(.el-carousel__container) {
						height: 480px !important;
					}

					img {
						width: 100%;
						height: 100%;
					}
				}
			}

			.conf2 {

				:deep(.el-carousel) {
					width: 100%;
				}

				:deep(.el-carousel__item) {
					display: flex;
					justify-content: space-between;
					overflow-x: scroll;
				}

				.card {
					flex: 0 0 auto;
					width: 318px;
					margin-right: 12px;
					cursor: pointer;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					border-radius: 12px;
					border: 1px solid #b0a7a7;
					transition: all 0.5s;

					.img {
						width: 316px;
						height: 235px;
					}

					&:hover {
						border: 1px solid #e30214;

						.msg {
							color: #fff;
							border-radius: 0 0 12px 12px;
							background-color: #e30214;

							.line {
								background-color: #fff;
							}
						}
					}

					img {
						width: auto;
						border-radius: 12px 12px 0 0;
					}

					.msg {
						height: 116px;
						display: flex;
						justify-content: space-between;
						padding: 16px;

						.line {
							display: block;
							width: 8px;
							height: 16px;
							line-height: 21px;
							margin-right: 4px;
							border-radius: 12px;
							background-color: #e30214;
						}

						.txt {
							font-size: 16px;
							line-height: 21px;
						}
					}
				}
			}

			.conf3 {
				.conf3-img {
					display: block;
					margin: 64px auto;
				}
			}

			.conf5 {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.card {
					cursor: pointer;
					width: 426px;
					padding: 32px;
					margin-bottom: 16px;
					border-radius: 12px;
					border: #b0a7a7 solid 1px;


					&:hover {
						color: #fff;
						box-shadow: 0 0 0 1px #e30214 inset;
						background: linear-gradient(180deg, #e30214 0%, #f16b57 100%);

						.article-title::before {
							content: "";
							display: inline-block;
							width: 3px;
							height: 20px;
							border-radius: 8px;
							margin-right: 16px;
							background-color: #fff;
						}
					}

					.article-title {
						font-size: 28px;
						line-height: 36px;
						font-weight: 500;
						margin-bottom: 8px;

						&::before {
							content: "";
							display: inline-block;
							width: 3px;
							height: 20px;
							border-radius: 8px;
							margin-right: 16px;
							background-color: #e30214;
						}
					}

					.article-txt {
						font-size: 16px;
						line-height: 21px;
					}
				}
			}
		}

		.tab-jd {
			width: auto;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;
			padding: 24px 12px;
			border-radius: 12px;
			border: 1px solid #b0a7a7;
			margin-top: 24px;

			.jd-title {
				height: 50px;
				border-bottom: #cdc6c6 solid 1px;
				font-size: 20px;
				font-weight: 500;
				line-height: 26px;
				text-align: left;
				padding-left: 32px;
			}

			.list {
				.item-conf {
					font-size: 14px;
					line-height: 24px;
					padding: 24px;
					transition: all 0.5s;

					&:hover {
						border-radius: 8px;
						background: #f2f2f2;
					}

					.item-conf-head {
						font-size: 16px;
						line-height: 21px;
						font-weight: 500;
						margin-bottom: 16px;

						&::before {
							content: "";
							display: inline-block;
							width: 3px;
							height: 14px;
							border-radius: 8px;
							margin-right: 8px;
							background-color: #e30214;
						}
					}

					.item-conf-jd {
						position: relative;
						line-height: 18px;

						.tips {
							font-weight: 500;
							margin-top: 12px;
							margin-bottom: 8px;
						}

						.desc {
							color: #4c4143;
							font-weight: 400;
							margin-bottom: 4px;
						}

						.jd-create {
							position: absolute;
							right: 0;
							bottom: 0;
						}
					}
				}
			}
		}

		.join-qa {
			cursor: pointer;
			margin: 64px auto;
		}
	}

	.my-dialog {
		.content {
			display: flex;

			.close {
				cursor: pointer;
				position: absolute;
				right: 28px;
				top: 28px;
				font-size: 28px;
			}

			.dia-img {
				width: auto;
				min-height: 360px;
				border-radius: 12px 0 0 12px;
			}

			.dia-msg {
				display: flex;
				width: auto;
				font-size: 16px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;
				padding-top: 56px;
				padding-left: 40px;

				.line {
					width: 6px;
					height: 14px;
					margin-top: 8px;
					margin-right: 14px;
					border-radius: 12px;
					background-color: #e30214;
				}

				.txt {
					width: 666px;
					line-height: 24px;
				}
			}
		}
	}

	:deep(.el-carousel__indicators) {
		display: none;
	}

	:deep(.el-dialog) {
		width: 1312px !important;
		padding: 0 !important;
	}

	:deep(.el-dialog__body) {
		width: 960px;
		padding: 0 !important;
	}
}

@media (max-width: 576px) {
	.join-container {
		.banner {
			width: 358px;
			margin: 0 auto;
			padding-bottom: 32px;

			.name {
				text-align: center;
				font-size: 24px;
				line-height: 64px;
				font-weight: 500;
			}

			.img {
				height: 100%;
			}

			.info {
				color: #fff;
				position: absolute;
				top: 38%;
				left: 50px;

				.title {
					font-size: 48px;
					font-weight: 500;
					line-height: 64px;
				}

				.msg {
					width: 240px;
					margin-top: 12px;
					font-size: 20px;
					font-weight: 400;
					line-height: 32px;
					letter-spacing: 0em;
					text-align: left;
				}
			}
		}

		.content {
			width: 358px;
			height: 100%;
			margin: 0 auto;

			.head {
				display: flex;
				justify-content: space-around;
				font-size: 14px;
				line-height: 18px;
				margin: 0 21px;
				border-bottom: 1px solid #cdc6c6;

				.tab {
					cursor: pointer;
					width: 160px;
					text-align: center;
					padding: 8px 0;
					border-bottom: none;
				}

				.active-tab {
					font-weight: 500;
					border-bottom: 2px solid #e30214;
				}
			}

			.tab-box {
				width: auto;
				font-size: 12px;
				line-height: 16px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;

				.title {
					font-size: 16px;
					line-height: 32px;
					font-weight: 500;
					padding: 20px 0;
				}

				.conf1 {
					padding-top: 10px;

					.carousel-imgs {
						width: auto;

						:deep(.el-carousel__container) {
							height: 140px !important;
						}

						img {
							width: 100%;
							height: 100%;
						}
					}
				}

				.conf2 {
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					overflow-x: scroll;

					.card {
						width: 200px;
						margin: 0 8px;
						text-wrap: wrap;
						word-wrap: break-word;
						white-space: pre-wrap;
						border-radius: 12px;
						border: 1px solid #b0a7a7;
						transition: all 0.5s;

						&:hover {
							border: 1px solid #e30214;

							.msg {
								color: #fff;
								border-radius: 0 0 12px 12px;
								background-color: #e30214;

								.line {
									background-color: #fff;
								}
							}
						}

						.img {
							width: 198px;
							height: 147px;
							border-radius: 12px 12px 0 0;
						}

						.msg {
							display: flex;
							justify-content: space-between;
							padding: 12px;

							.line {
								display: block;
								width: 8px;
								height: 12px;
								line-height: 18px;
								margin-right: 4px;
								border-radius: 12px;
								background-color: #e30214;
							}

							.txt {
								font-size: 12px;
								line-height: 16px;
							}
						}
					}
				}

				.conf3 {
					.conf3-img {
						width: 358px;
						display: block;
						margin: 12px auto;
					}
				}

				.conf4-img {
					width: 358px;
					display: block;
				}

				.conf5 {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;

					.card {
						cursor: pointer;
						width: 358px;
						padding: 12px;
						margin-bottom: 12px;
						border-radius: 12px;
						border: #b0a7a7 solid 1px;

						&:hover {
							color: #fff;
							box-shadow: 0 0 0 1px #e30214 inset;
							background: linear-gradient(180deg, #e30214 0%, #f16b57 100%);

							.article-title::before {
								content: "";
								display: inline-block;
								width: 3px;
								height: 12px;
								border-radius: 8px;
								margin-right: 8px;
								background-color: #fff;
							}
						}

						.article-title {
							font-size: 14px;
							line-height: 16px;
							font-weight: 500;
							margin-bottom: 4px;

							&::before {
								content: "";
								display: inline-block;
								width: 3px;
								height: 12px;
								border-radius: 8px;
								margin-right: 8px;
								background-color: #e30214;
							}
						}

						.article-txt {
							font-size: 12px;
							line-height: 16px;
						}
					}
				}
			}

			.tab-jd {
				width: auto;
				padding: 12px;
				border-radius: 12px;
				border: 1px solid #b0a7a7;
				margin-top: 12px;

				.jd-title {
					height: 28px;
					border-bottom: #cdc6c6 solid 1px;
					font-size: 14px;
					font-weight: 500;
					line-height: 18px;
					text-align: left;
					padding-left: 12px;
				}

				.list {
					.item-conf {
						font-size: 12px;
						line-height: 14px;
						padding: 12px;
						transition: all 0.5s;

						&:hover {
							border-radius: 8px;
							background: #f2f2f2;
						}

						.item-conf-head {
							font-size: 14px;
							line-height: 16px;
							font-weight: 500;
							margin-bottom: 12px;
							color: #373737;

							&::before {
								content: "";
								display: inline-block;
								width: 3px;
								height: 14px;
								border-radius: 8px;
								margin-right: 8px;
								background-color: #e30214;
							}
						}

						.item-conf-jd {
							position: relative;
							line-height: 18px;

							.tips {
								font-weight: 500;
								margin-top: 12px;
								margin-bottom: 8px;
							}

							.desc {
								color: #4c4143;
								font-weight: 400;
							}

							.jd-create {
								position: absolute;
								right: 0;
								bottom: 0;
							}
						}
					}
				}
			}

			.join-qa {
				cursor: pointer;
				margin: 40px auto;
				margin-bottom: 64px;

				img {
					width: 358px;
					border-radius: 12px;
				}
			}
		}

		.my-dialog {
			.content {
				display: block;

				.close {
					cursor: pointer;
					position: absolute;
					right: 16px;
					top: 16px;
					font-size: 16px;
				}

				.dia-img {
					width: 358px;
					min-height: 200px;
					border-radius: 12px;
				}

				.dia-msg {
					display: flex;
					width: auto;
					font-size: 16px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					padding: 16px;

					.line {
						width: 6px;
						height: 12px;
						margin-top: 6px;
						margin-right: 8px;
						border-radius: 12px;
						background-color: #e30214;
					}

					.txt {
						font-size: 12px;
						width: 666px;
						line-height: 24px;
					}
				}
			}
		}

		:deep(.el-dialog) {
			width: 358px !important;
			padding: 0 !important;
		}

		:deep(.el-dialog__body) {
			width: 358px;
			padding: 0 !important;
		}
	}
}
</style>
