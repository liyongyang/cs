<template>
	<div class="qa-container">
		<div class="head flex">
			<el-icon class="icon-back cursor-pointer" @click="goBack">
				<ArrowLeftBold />
			</el-icon>
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
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
import { qaList, aboutOurs } from './index';
onMounted(() => { });
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

		.icon-back {
			font-size: 32px;
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
