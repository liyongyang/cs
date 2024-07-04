<template>
	<div class="case-container">
		<div class="main">
			<div class="head">
				<el-icon class="icon-back cursor-pointer animate__animated animate__headShake" @click="goBack">
					<ArrowLeftBold />
				</el-icon>
			</div>
			<div class="cards">
				<div class="card animate__animated animate__fadeIn" v-for="(item, idx) in list" :key="idx">
					<img class="card-img hvr-shrink" :src="item.img" alt="" @click="handleDialog(idx + 1)">
					<li class="name">{{ item.name }}</li>
					<li class="more">{{ t('common.more') }}</li>
				</div>
			</div>
		</div>
		<el-dialog class="my-dialog" v-model="showDialog" align-center>
			<div class="content" :style="'height:' + activeCardHeight[activeCard] + 'px'">
				<el-icon class="close" @click="showDialog = false">
					<CloseBold />
				</el-icon>
				<img class="dia-img" :src="`/home/card` + activeCard + `.png`" alt="" />
				<div class="dia-msg">
					<li class="line"></li>
					<div class="flex flex-col " :style="'height:' + (activeCardHeight[activeCard] - 138) + 'px'">
						<li class="txt" v-for="(item, idx) in list[activeCard - 1].info" :key="idx">{{ item }}</li>
						<li class="name">{{ list[activeCard - 1].name }}</li>
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";


const router = useRouter()
const { t } = useI18n()

const showDialog = ref(false)
const activeCard = ref(0)
const list = [
	{
		name: t('home_more[0].name'),
		img: t('home_more[0].img'),
		info: [
			t('home_more[0].info[0]'),
			t('home_more[0].info[1]'),
			t('home_more[0].info[2]'),
			t('home_more[0].info[3]'),
		]
	},
	{
		name: t('home_more[1].name'),
		img: t('home_more[1].img'),
		info: [
			t('home_more[1].info[0]'),
			t('home_more[1].info[1]'),
			t('home_more[1].info[2]'),
			t('home_more[1].info[3]'),
		]
	},
	{
		name: t('home_more[2].name'),
		img: t('home_more[2].img'),
		info: [
			t('home_more[2].info[0]'),
			t('home_more[2].info[1]'),
			t('home_more[2].info[2]'),
		]
	},
	{
		name: t('home_more[3].name'),
		img: t('home_more[3].img'),
		info: [
			t('home_more[3].info[0]'),
			t('home_more[3].info[1]'),
			t('home_more[3].info[2]'),
		]
	},
	{
		name: t('home_more[4].name'),
		img: t('home_more[4].img'),
		info: [
			t('home_more[4].info[0]'),
			t('home_more[4].info[1]'),
			t('home_more[4].info[2]'),
		]
	},
	{
		name: t('home_more[5].name'),
		img: t('home_more[5].img'),
		info: [
			t('home_more[5].info[0]'),
			t('home_more[5].info[1]'),
			t('home_more[5].info[2]'),
		]
	},
	{
		name: t('home_more[6].name'),
		img: t('home_more[6].img'),
		info: [
			t('home_more[6].info[0]'),
			t('home_more[6].info[1]'),
			t('home_more[6].info[2]'),
		]
	},
	{
		name: t('home_more[7].name'),
		img: t('home_more[7].img'),
		info: [
			t('home_more[7].info[0]'),
			t('home_more[7].info[1]'),
			t('home_more[7].info[2]'),
		]
	},
	// {
	// 	name: t('home_more[8].name'),
	// 	img: t('home_more[8].img'),
	// 	info: [
	// 		t('home_more[8].info[0]'),
	// 		t('home_more[8].info[1]'),
	// 		t('home_more[8].info[2]'),
	// 	]
	// },
	{
		name: t('home_more[9].name'),
		img: t('home_more[9].img'),
		info: [
			t('home_more[9].info[0]'),
			t('home_more[9].info[1]'),
			t('home_more[9].info[2]'),
			t('home_more[9].info[3]'),
		]
	},
	// {
	// 	name: t('home_more[10].name'),
	// 	img: t('home_more[10].img'),
	// 	info: [
	// 		t('home_more[10].info[0]'),
	// 		t('home_more[10].info[1]'),
	// 		t('home_more[10].info[2]'),
	// 	]
	// },
	{
		name: t('home_more[11].name'),
		img: t('home_more[11].img'),
		info: [
			t('home_more[11].info[0]'),
			t('home_more[11].info[1]'),
		]
	},
	{
		name: t('home_more[12].name'),
		img: t('home_more[12].img'),
		info: [
			t('home_more[12].info[0]'),
			t('home_more[12].info[1]'),
		]
	},
	{
		name: t('home_more[13].name'),
		img: t('home_more[13].img'),
		info: [
			t('home_more[13].info[0]'),
			t('home_more[13].info[1]'),
			t('home_more[13].info[2]'),
		]
	}
]
onMounted(() => { });

const goBack = () => {
	router.go(-1)
}
const activeCardHeight = {
	1: '426',
	2: '360',
	3: '426',
	4: '360',
	5: '426',
	6: '360',
	7: '426',
	8: '360',
	9: '426',
	10: '360',
	11: '426',
	12: '397',
}
const handleDialog = (idx: number) => {
	showDialog.value = true
	activeCard.value = idx
}
</script>
<style lang='scss' scoped>
.case-container {
	width: 100%;
	background-color: #F5F5F5;

	.main {
		width: 1312px;
		margin: 0 auto;
		color: #4C4143;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.head {
			padding-top: 40px;
			position: relative;

			.icon-back {
				font-size: 32px;
				width: 80px;
				height: 80px;
				border-radius: 100%;
				background-color: #fff;
			}
		}

		.cards {
			display: flex;
			flex-wrap: wrap;
			width: auto;
			line-height: 28px;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;


			.card {
				flex: 0 0 auto;
				text-align: center;
				margin: 12px 64px;
				transition: all 1.8s;

				.card-img {
					border-radius: 100%;
					cursor: pointer;
				}

				.more {
					opacity: 0;
				}

				&:hover {
					.card-img {
						box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
					}

					.more {
						transition: all 0.5s ease-in-out;
						cursor: pointer;
						opacity: 1;
						color: #E30214;
					}
				}
			}
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
				height: auto;
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
				padding-bottom: 80px;
				color: #231C1E;

				.line {
					width: 6px;
					height: 14px;
					margin-top: 4px;
					margin-right: 14px;
					border-radius: 12px;
					background-color: #e30214;
				}

				.flex {
					overflow: auto;
				}

				.txt {
					width: 700px;
					line-height: 24px;
					margin-bottom: 8px;
				}

				.name {
					position: absolute;
					bottom: 40px;
				}
			}
		}
	}

	:deep(.el-dialog) {
		width: 1312px !important;
		padding: 0 !important;
		border-radius: 12px;
	}

	:deep(.el-dialog__body) {
		width: 960px;
		padding: 0 !important;
	}
}

@media (max-width: 576px) {
	.case-container {
		width: 100%;
		background-color: #F5F5F5;

		.main {
			width: 358px;
			margin: 0 auto;
			color: #4C4143;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;

			.head {
				padding-top: 18px;
				position: relative;

				.icon-back {
					font-size: 14px;
					width: 30px;
					height: 30px;
					border-radius: 100%;
					background-color: #fff;
				}
			}

			.cards {
				display: flex;
				flex-wrap: wrap;
				width: auto;
				font-size: 14px;
				line-height: 28px;
				text-wrap: wrap;
				word-wrap: break-word;
				white-space: pre-wrap;


				.card {
					width: 150px;
					flex: 0 0 auto;
					text-align: center;
					margin: 12px;
					transition: all 1.8s;

					.card-img {
						width: 80px;
						cursor: pointer;
					}

					.more {
						opacity: 0;
					}

					&:hover {

						.more {
							cursor: pointer;
							opacity: 1;
							color: #E30214;
						}
					}
				}
			}
		}

		.my-dialog {
			.content {
				display: flex;
				flex-direction: column;

				.close {
					cursor: pointer;
					position: absolute;
					right: 14px;
					top: 14px;
					padding: 2px;
					font-size: 16px;
					color: #fff;
					border-radius: 100%;
					background-color: #e30214;
				}

				.dia-img {
					width: 320px;
					margin: 0 auto;
					border-radius: 12px 12px 0 0;
				}

				.dia-msg {
					display: flex;
					width: auto;
					height: 100%;
					font-size: 12px;
					text-wrap: wrap;
					word-wrap: break-word;
					white-space: pre-wrap;
					padding: 8px;
					color: #231C1E;


					.line {
						width: 4px;
						height: 14px;
						margin-top: 4px;
						margin-right: 8px;
						border-radius: 12px;
						background-color: #e30214;
					}

					.txt {
						width: 280px;
						line-height: 18px;
						margin-bottom: 4px;
					}

					.flex {
						overflow: auto;
					}

					.name {
						position: relative;
						bottom: 0;
					}
				}
			}
		}

		:deep(.el-dialog) {
			width: 320px !important;
			padding: 0 !important;
		}

		:deep(.el-dialog__body) {
			width: 320px;
			padding: 0 !important;
		}
	}
}
</style>
