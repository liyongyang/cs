<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">Q&A</li>
		</div>
		<div class="content">
			<div class="qa-item wow animate__fadeInUp" v-for="(item, index) in qaList" :key="index">
				<li class="item-q">{{ item.question }}</li>
				<li class="item-a">{{ item.answer }}</li>
			</div>
			<div class="qa-item wow animate__fadeInUp">
				<li class="item-q">{{ aboutOurs.question }}</li>
				<li class="item-a" v-for="(child, i) in aboutOurs.answer" :key="i">
					<p>{{ child.title }}</p>
					<p v-if="child.detail">{{ child.detail }}</p>
				</li>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";
const { t } = useI18n()
const router = useRouter();
const qaList = [
	{
		question: t('page_qa.qaList[0].question'),
		answer: t('page_qa.qaList[0].answer'),
	},
	{
		question: t('page_qa.qaList[1].question'),
		answer: t('page_qa.qaList[1].answer'),
	},
	{
		question: t('page_qa.qaList[2].question'),
		answer: t('page_qa.qaList[2].answer'),
	},
	{
		question: t('page_qa.qaList[3].question'),
		answer: t('page_qa.qaList[3].answer'),
	},
	{
		question: t('page_qa.qaList[4].question'),
		answer: t('page_qa.qaList[4].answer'),
	},
	{
		question: t('page_qa.qaList[5].question'),
		answer: t('page_qa.qaList[5].answer'),
	},
	{
		question: t('page_qa.qaList[6].question'),
		answer: t('page_qa.qaList[6].answer'),
	},
	{
		question: t('page_qa.qaList[7].question'),
		answer: t('page_qa.qaList[7].answer'),
	},
	{
		question: t('page_qa.qaList[8].question'),
		answer: t('page_qa.qaList[8].answer'),
	},
	{
		question: t('page_qa.qaList[9].question'),
		answer: t('page_qa.qaList[9].answer'),
	},
	{
		question: t('page_qa.qaList[10].question'),
		answer: t('page_qa.qaList[10].answer'),
	},
]
const aboutOurs = {
	question: t('page_qa.aboutOurs.question'),
	answer: [
		{
			title: t('page_qa.aboutOurs.answer[0].title'),
			detail: t('page_qa.aboutOurs.answer[0].detail'),
		},
		{
			title: t('page_qa.aboutOurs.answer[1].title'),
			detail: t('page_qa.aboutOurs.answer[1].detail'),
		},
		{
			title: t('page_qa.aboutOurs.answer[2].title'),
			detail: t('page_qa.aboutOurs.answer[2].detail'),
		},
		{
			title: t('page_qa.aboutOurs.answer[3].title'),
			detail: t('page_qa.aboutOurs.answer[3].detail'),
		},
		{
			title: t('page_qa.aboutOurs.answer[4].title'),
			detail: '',
		},
		{
			title: t('page_qa.aboutOurs.answer[5].title'),
			detail: '',
		},
	],
}

const goBack = () => {
	router.push('/joinUs')
}
</script>
<style lang='scss' scoped>
.qa-container {
	width: 1312px;
	margin: 0 auto;

	.head {
		display: flex;
		align-items: center;
		font-size: 48px;
		line-height: 63px;
		font-weight: 500;

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

	.content {
		color: #4C4143;
		width: auto;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.item-q {
			font-size: 28px;
			line-height: 64px;
			font-weight: 500;
			margin: 24px 0;
		}

		.item-a {
			font-size: 18px;
			line-height: 24px;
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

			.icon-back {
				position: absolute;
				left: 0;
				font-size: 24px;
				z-index: 9;
			}
		}

		.content {
			color: #4C4143;
			width: auto;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;

			.item-q {
				font-size: 14px;
				line-height: 18px;
				font-weight: 500;
				margin: 12px 0;
			}

			.item-a {
				font-size: 12px;
				line-height: 16px;
			}
		}
	}
}
</style>
