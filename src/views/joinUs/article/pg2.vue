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
			<div class="cont" v-for="(items, index) in pd.cont" :key="index">
				<div class="wow animate__fadeInUp" v-for="(item, i) in items.msg" :key="i">
					<li class="item-tit">{{ item.tit }}</li>
					<li class="item-txt" v-for="t in item.txt" :key="t">{{ t }}</li>
				</div>
			</div>
			<div class="cont wow animate__fadeInUp">
				<img class="img" :src="pd.cont[1].img" alt="" srcset="">
				<div class="wow animate__fadeInUp" v-for="(item, i) in pd.cont[1].txt" :key="i">
					<li class="item-txt">{{ item }}</li>
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
	title: '再给我五年，我要成为这个行业的专家',
	cont: [
		{
			img: '/article/art2-1.png',
			txt: `今年是我进入职场的第二个五年。
入职Csuite虽然只有短短一个月，但是收获满满。在这里，我知道：`,
			msg: [
				{
					tit: '一个人可以跑得很快，一群人可以跑得更远',
					txt: [
						`刚入职时，我觉得自己在行业内经验不足，再加上身边小伙伴们都展现出了高水准的工作能力，所以总是想学习更多一点，跑得更快一点。一个人单打独斗了许久，不仅工作效率不高，还由于经验不足产生了许多问题。后来经过Tingting的提醒我才恍然大悟，我一直忽略了我们是一个Team。后来我学会尝试多去问问别人的意见，做项目的时候时刻想着新伙伴，在带教的同时自己的基本功不仅得到了巩固，而且为大家的进步感到由衷的开心。`
					]
				},
				{
					tit: '他是候选人，也是我最好的老师',
					txt: ['现如今收集信息的方式渠道多种多样，人们接受的信息面也不再单调片面。在任职初期，我在面对各类信息时还是会有很多知识盲区。在我不断请教人选的过程中，我发现把一些碎片化的知识进行整合填充是一个高效的信息搜集方法。我可以把请教来的信息消化吸收分享给其他人选。这样不仅能让候选人更清晰地了解自己的职业规划，也可以逐渐提高我本身的专业度。候选人不再是候选人，而是老师，朋友。']
				},
				{
					tit: '你以为的，根本不是你以为的',
					txt: [
						'人总是会被自己的“聚光灯效应”所迷惑，过分在意自己的行为带来的不好影响。我做Mapping的时候自己总担心别人不愿意转推荐其他人选，或者担心自己这么做会不会被误解打探隐私。可是当我大胆尝试迈出第一步的时候，发现真的有一些人选非常愿意为我们推荐她身边的人。后来我沟通的时候也会经常把“你身边有没有合适的人选可以帮帮忙推荐给我啦！”挂在嘴边，最后真的通过转推荐和Cold Call找到了客户公司想要的目标人选，那一刻我真的超级有成就感，这可是招聘网站都找不到的人啊！所以不要太过在意跟候选人沟通是否会给其带来不好的影响，多聊聊没准还会有惊喜！'
					]
				}, {
					tit: '刻意练习是最好的学习方法',
					txt: [
						'“人一能之，己百之；人十能之，几千之。果能此道矣，虽愚必明，虽柔必强”',
						'刻意练习也是Tingting跟我说过的最重要的方法和技巧。当然学习任何知识都是一样，比如如何去跟候选人沟通，如何做企业Job Brief，话术所有的人都会，但是不是所有人都有毅力和恒心一遍遍反复练习，我相信只有不断练习才能运用得游刃有余，最后成为行业的专家。'
					]
				}, {
					tit: '拒绝焦虑，要看到自己的成长',
					txt: ['入职初期，面对每天完不成的KPI我经常充满焦虑，每天都感觉自己忙忙碌碌，却没有什么收获。后来尝试了制定Day plan，把自己计划目标都写在纸上，不再是简单的“今天计划什么项目”“找到几个报告”几个字，做完一项划掉一项。虽然还会存在KPI没有完成的情况，但不会因此产生焦虑，因为我可以清晰地知道自己在这一天中做了什么，学到了什么，收获了什么。我也不再纠结于“我没有完成什么”，而是会通过“我今天做了什么”复盘总结，并且不断感受到自己的进步，充满信心。']
				}
			]
		},
		{
			img: '/article/art2-2.png',
			txt: [
				'猎头行业和In House的区别还是蛮大的，HR属于支持部门，猎头属于业务部门，流程不同，归属感不同，职责范围也不同。就从压力这点来讲，HR面对的压力更多是对整体部门以及工作流程的把控，而猎头很多的压力来自于业绩和工作量。主要还是要结合自己的性格未来的目标去做选择。',
				'我明白我未来要面对的挑战还是非常多的，做行业和岗位的深度研究，我要学会在冰山下寻访人选，甚至还要帮助人选抓住痛点去做面试辅导，甚至Offer选择分析和职业规划，不过我非常乐意接受这一项挑战，也期待自己进步的样子。',
				"最后聊聊自己的目标吧，人们眼中的天才之所以卓越非凡，并非天资超人一等，而是付出了持续不断的努力。一万小时的锤炼是任何人从平凡变成超凡的必要条件，一万小时折合成工作时间也就五年而已，再给我五年，我要成为这个行业的专家。"
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
