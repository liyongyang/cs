<template>
	<div class="qa-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ pageInfo.title }}</li>
		</div>
		<img class="img wow animate__fadeInUp" src="@/assets/myService/detail_7_1.png" alt="">
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
			<div class="cards">
				<div class="card" v-for="(item, index) in pageInfo.conf3.card" :key="index">
					<img :src="`/myService/icons/detail7_` + index + `.png`" alt="">
					<li class="card-txt">{{ item }}</li>
				</div>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf4.title }}</li>
			<div class="cards2">
				<li class="card2" v-for="(item, index) in pageInfo.conf4.card" :key="index">{{
				item }}
				</li>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf5.title }}</li>
			<div class="cards2">
				<img class="img" v-for="(item, index) in pageInfo.conf5.img" :key="index" :src="item" alt="">
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf6.title }}</li>
			<img class="img" :src="t('server_case7.conf6.img')" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf7.title }}</li>
			<img class="img" :src="t('server_case7.conf7.img')" alt="">
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf8.title }}</li>
			<li class="msg" v-for="(item, index) in pageInfo.conf8.msg" :key="index">{{ item }}</li>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf9.title }}</li>
			<div class="cards3" v-for="(item, index) in pageInfo.conf9.card" :key="index">
				<li class="cards3-tit">{{ item.name }}</li>
				<li class="cards3-msg" v-for="t in item.msg" :key="t">{{ t }}</li>
			</div>
		</div>
		<div class="conf-info wow animate__fadeInUp">
			<li class="title">{{ pageInfo.conf10.title }}</li>
			<img class="img" src="/myService/icons/detail7_card2_3.png" alt="">
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";

const { t } = useI18n()
const router = useRouter();
const pageInfo = {
	title: t('server_case7.title'),
	conf1: {
		title: t('server_case7.conf1.title'),
		msg: [
			t('server_case7.conf1.msg[0]')
		]
	},
	conf2: {
		title: t('server_case7.conf2.title'),
		msg: [
			t('server_case7.conf2.msg[0]')
		]
	},
	conf3: {
		title: t('server_case7.conf3.title'),
		card: [
			t('server_case7.conf3.card[0]'),
			t('server_case7.conf3.card[1]'),
			t('server_case7.conf3.card[2]'),
			t('server_case7.conf3.card[3]'),
			t('server_case7.conf3.card[4]')
		],
	},
	conf4: {
		title: t('server_case7.conf4.title'),
		card: [
			t('server_case7.conf4.card[0]'),
			t('server_case7.conf4.card[1]'),
			t('server_case7.conf4.card[2]'),
			t('server_case7.conf4.card[3]'),
			t('server_case7.conf4.card[4]'),
			t('server_case7.conf4.card[5]'),
			t('server_case7.conf4.card[6]')
		]
	},
	conf5: {
		title: t('server_case7.conf5.title'),
		img: [
			t('server_case7.conf5.img[0]'),
			t('server_case7.conf5.img[1]'),
			t('server_case7.conf5.img[2]'),
			t('server_case7.conf5.img[3]'),
			t('server_case7.conf5.img[4]'),
		]
	},
	conf6: {
		title: t('server_case7.conf6.title'),
	},
	conf7: {
		title: t('server_case7.conf7.title'),
	},
	conf8: {
		title: t('server_case7.conf8.title'),
		msg: [
			t('server_case7.conf8.msg[0]'),
			t('server_case7.conf8.msg[1]'),
		]
	},
	conf9: {
		title: t('server_case7.conf9.title'),
		card: [
			{
				name: t('server_case7.conf9.card[0].name'),
				msg: [
					t('server_case7.conf9.card[0].msg[0]'),
					t('server_case7.conf9.card[0].msg[1]'),
				]
			},
			{
				name: t('server_case7.conf9.card[1].name'),
				msg: [
					t('server_case7.conf9.card[1].msg[0]'),
				]
			},
			{
				name: t('server_case7.conf9.card[2].name'),
				msg: [
					t('server_case7.conf9.card[2].msg[0]'),
					t('server_case7.conf9.card[2].msg[1]'),
				]
			},
			{
				name: t('server_case7.conf9.card[3].name'),
				msg: [
					t('server_case7.conf9.card[3].msg[0]'),
					t('server_case7.conf9.card[3].msg[1]'),
					t('server_case7.conf9.card[3].msg[2]'),
				]
			}
		]
	},
	conf10: {
		title: t('server_case7.conf10.title'),
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
			max-width: 1312px;
			margin-bottom: 32px;
		}

		.cards {
			display: flex;
			justify-content: space-between;

			.card {
				text-align: center;

				.card-txt {
					margin-top: 16px;
				}
			}
		}

		.cards2 {
			display: flex;
			flex-wrap: wrap;

			.img {
				margin: 0 16px 28px 0;
			}

			.card2 {
				// display: flex;
				padding: 36px 136px;
				border-radius: 8px;
				border: #E30214 4px solid;
				margin: 0 24px 24px 24px;
				text-align: center;
				align-items: center;
				font-size: 28px;
				line-height: 38px;
				font-weight: 500;
				width: 600px;
			}
		}

		.cards3 {
			border-radius: 12px;
			border: #B0A7A7 1px solid;
			padding: 40px;
			margin-bottom: 40px;

			.cards3-tit {
				font-size: 28px;
				font-weight: 500;
				line-height: 32px;
				margin-bottom: 16px;

				&::before {
					content: '';
					display: inline-block;
					width: 4px;
					height: 22px;
					margin-right: 16px;
					background-color: #E30214;
				}
			}

			.cards3-msg {
				font-size: 18px;
				line-height: 28px;

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
			line-height: 40px;
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

			.title {
				font-size: 16px;
				line-height: 28px;
				margin: 16px 0;
			}

			.msg {
				font-size: 14px;
				line-height: 22px;
				margin-bottom: 20px
			}

			.cards {
				display: block;

				.card {
					display: flex;
					margin: 12px 0;
					padding-left: 50px;
					align-items: center;

					img {
						width: 48px;
					}

					.card-txt {
						margin: 0 20px;
						font-size: 14px;
					}
				}
			}

			.cards2 {
				.card2 {
					width: 358px;
					padding: 20px;
					font-size: 14px;
					line-height: 22px;
					margin: 12px auto;
					border: #E30214 2px solid;
				}

				.img {
					margin: 8px auto;
					margin-bottom: 0;
				}
			}

			.img {
				margin: 8px auto;
				margin-bottom: 0;
			}
		}
	}
}
</style>
