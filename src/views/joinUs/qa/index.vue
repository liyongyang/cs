<template>
	<div class="qa-container">
		<div class="head flex">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span>返回</span>
			</div>
			<li class="flex-initial w-full text-center animate__animated animate__fadeInDown">Q&A</li>
		</div>
		<div class="content">
			<div class="qa-item wow animate__fadeInUp" v-for="(item,index) in qaList" :key="index">
				<li class="item-q">{{ item.question }}</li>
				<li class="item-a">{{ item.answer }}</li>
			</div>
			<div class="qa-item wow animate__fadeInUp">
				<li class="item-q">{{ aboutOurs.question }}</li>
				<li class="item-a" v-for="(child,i) in aboutOurs.answer" :key="i">
					<p>{{child.title}}</p>
					<p v-if="child.detail">{{child.detail}}</p>
				</li>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { Ref, onMounted,ref,reactive,onUnmounted } from 'vue';
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
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
      detail:t('page_qa.aboutOurs.answer[0].detail'),
    },
    {
      title:  t('page_qa.aboutOurs.answer[1].title'),
      detail:t('page_qa.aboutOurs.answer[1].detail'),
    },
    {
      title:  t('page_qa.aboutOurs.answer[2].title'),
      detail:t('page_qa.aboutOurs.answer[2].detail'),
    },
    {
      title:  t('page_qa.aboutOurs.answer[3].title'),
      detail:t('page_qa.aboutOurs.answer[3].detail'),
    },
    {
      title:  t('page_qa.aboutOurs.answer[4].title'),
      detail: '',
    },
    {
      title:  t('page_qa.aboutOurs.answer[5].title'),
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
		.icon_wrap{
			position: fixed;
			top:109px;
			// display: flex;
			height:80px;
			width: 80px;
			border-radius: 40px;
			background: #fff;
			// padding-top:23px;
			text-align: center;
			&:hover span{
				opacity: 1;
				display: inline-block;
			}
			span{
				display: none;
				opacity: 0;
				position: relative;
				left: -2px;
				height: 32px;
				line-height: 32px;
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
