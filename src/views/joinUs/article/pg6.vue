<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ pd.title }}</li>
		</div>
		<div class="content">
			<img class="img wow animate__fadeInUp" :src="pd.cont[0].img" alt="" srcset="">
			<li class="item-txt wow animate__fadeInUp">{{ pd.cont[0].txt }}</li>
			<div class="cont" v-for="(items, index) in pd.cont[0].msg" :key="index">
				<div class="wow animate__fadeInUp">
					<li class="item-tit">{{ items.tit }}</li>
					<li class="item-txt" v-for="t in items.txt" :key="t">{{ t }}</li>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";
const { t } = useI18n()
const router = useRouter();
const pd = {
	title: 'Csuite Inspiration|金三银四真的是金三银四么？',
	cont: [
		{
			img: '/article/art6-1.png',
			txt: `“金三银四” ？
“金九银十” ？
 跳槽旺季 or 招聘难期？`,
			msg: [
				{
					tit: '“金三银四”',
					txt: [
						'在求职及招聘市场中，一直有“金三银四”，“金九银十”的说法，这是指一年中两个求职高峰期。',
						'目前4月已经接近尾声，但很多求职者还没感受到3，4月的火热，甚至有不少媒体直言：金三银四消失了。'
					]
				},
				{
					tit: '金三银四的消逝，求职市场的变革',
					txt: [
						'  其实，与其说“金三银四”消失了，不如说它正在经历一场深刻的变革。',
						'    随着经济的转型和产业的升级，传统的求职高峰期正在逐渐淡化，而新的求职机会也在不断涌现。这种变化对于求职者来说，既是一种挑战，也是一种机遇。',
						'    然而，由于信息的不对称和求职者的认知滞后，许多人并没有及时捕捉到这些新的机会，从而错过了最佳的求职时机。',
						'    此外，求职市场已经不再是一个简单的卖方市场。随着高等教育的普及和人才储备的增加，求职者的数量也在不断攀升。这意味着每个岗位面临更多的竞争者，而企业对于人才的需求也变得更加挑剔和精准。因此，即使是在“金三银四”这样的传统求职高峰期，想要找到一份满意的工作也变得越来越难。',
					]
				},
				{
					tit: '重塑求职策略，把握时代新机',
					txt: [
						'  即便传统求职高峰期风采不再，也并不意味着求职市场已经完全失去了机遇。相反，对于那些能够提前布局、积极应对的求职者来说，依然可以找到属于自己的职业发展道路。关键在于求职者是否能够提早发现那些具有发展潜力的行业和公司，并提前布局相关领域；是否能够有效地链接到关键决策人或相关资源，甚至与他们进行直接的对话；是否能够清晰地梳理出自己的关键优势，并拥有出色的求职应试能力。',
						'    求职原本就是一个长期的过程，时刻关注行业的发展和自我提升，不把目光局限于“金三银四”，才是把握求职先机的长久之策。',
						'C-Suite Executive（璞偌芳德）是一家全球化视野的人才服务企业，提供人才招聘、人才管理与市场调研工作等全方位人才定制服务。旨在以客户为中心，深入当今挑战与机遇并存的中国市场，提出解决方案，助力与客户建立长期稳固的管理体系，助力其在中国的长远发展，目标成为业内顶尖的专业服务机构。',
					]
				}
			]
		}
	]
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

		.img {
			width: 1312px;
			margin: 40px auto;
		}

		.item-tit {
			font-size: 28px;
			font-weight: 500;
			line-height: 26px;
			margin: 40px 0;
		}

		.item-txt {
			font-size: 18px;
			line-height: 26px;
			margin-bottom: 20px;
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
			font-size: 16px;
			line-height: 40px;
			font-weight: 500;

			.icon_wrap {
				flex: 0 0 auto;
				height: 40px;
				width: 40px;
				cursor: pointer;
				background: #fff;
				text-align: center;
				border-radius: 100%;

				&:hover {
					box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

					span {
						margin-right: 2px;
						opacity: 1;
						display: inline;
					}
				}

				span {
					opacity: 0;
					display: none;
					position: relative;
					font-size: 12px;
					transition: all 0.5s ease-in-out;
				}

			}

			.icon-back {
				display: inline-block;
				font-size: 20px;
				vertical-align: sub;
			}
		}

		.content {
			color: #4C4143;
			width: auto;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;

			.img {
				width: 358px;
				margin: 20px auto;
			}


			.item-tit {
				font-size: 14px;
				font-weight: 500;
				line-height: 24px;
				margin: 20px 0;
			}

			.item-txt {
				font-size: 12px;
				line-height: 20px;
			}
		}
	}
}
</style>
