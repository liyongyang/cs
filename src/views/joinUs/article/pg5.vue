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
			<div class="cont wow animate__fadeInUp">
				<img class="img" :src="pd.cont[1].img" alt="" srcset="">
				<li class="item-tit">{{ pd.cont[1].tit }}</li>
				<div class="wow animate__fadeInUp" v-for="(item, i) in pd.cont[1].txt" :key="i">
					<li class="item-txt">{{ item }}</li>
				</div>
			</div>
			<div class="cont" v-for="(items, index) in pd.cont[2].msg" :key="index">
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
	title: '格局打开，交一个猎头朋友',
	cont: [
		{
			txt: `我们说，在职场上，你至少需要一个猎头朋友。

猎头到底能为职场人带来什么？

为什么你需要猎头朋友？

先来普及一下：“猎头”（Head hunting），其真正名称应该叫管理人员搜寻（Executive search），其字面含意是猎取人头之意，即猎取人头脑中的智慧、知识、技能等行为。猎头的追逐目标在高学历、高职位、高价位三位一体的人身上。`,
			msg: [
				{
					tit: '猎头着眼于整个行业',
					txt: [
						`不知道你们发现了没有？与猎头聊天，说得最多的话题就是行业格局、企业动态。
所以，聪明的候选人，会经常和猎头顾问联系一下，聊聊天，都是因为这里有他需要的东西。
打个比方，一个猎头顾问，就像位于蜘蛛网中心，整个行业的动向、资讯都会传达到他那里。如果你是一名职业经理人，自然希望有个关注本企业和竞争对手的人和自己交流信息，沟通有无。
以猎头的全局观自然会看到职业经理人看不到的内容，而这些内容，往往是他山之石，可以及时地帮助职业经理人掌握行业动态、预知行业变化形势、洞察企业问题根源所在。`
					]
				},
				{
					tit: '好工作往往不在求职网站，而在猎头的手上',
					txt: [
						'除了你和家人，最关心你职业生涯的人就是猎头了。猎头公司总是与企业决策者保持联系，他们知道你所在领域的招聘淡、旺季，了解市场上的机会。企业交托到猎头手上的职位一般都是优质的职位。',
						'有了一定的经验和成绩，你的市场价值得到充分展现，就会吸引更多的猎头。“猎头不是为所有人找工作，而是为好工作找人。”因此除了考虑猎头手上的优选职位，你也可以主动出击，加入猎头公司的人才库。',
						'猎头顾问的手机里，一般来说都有1000人以上的中高端人才及相关人脉，这些人集中在某些行业里，分布在不同的领域和企业。',
						'一个优秀的猎头，通常是通熟专业、擅长管理、见多识广的。',
						'他们必须掌握的知识和技能有：企业的战略管理、人力资源管理、组织变革管理、流程管理、目标管理、时间管理、工作分析、岗位编制、招聘与面试、薪酬与绩效设计、职业生涯规划、沟通技巧、商务礼仪、应用心理学、信息管理等等。',
						'以上技能普遍适用于任何行业的猎头。而作为特定行业，譬如食品行业的猎头，甚至需要食品相关专业毕业，及食品企业几年工作经历。'
					]
				},
				{
					tit: '好工作往往不在求职网站，而在猎头的手上',
					txt: [
						'除了你和家人，最关心你职业生涯的人就是猎头了。猎头公司总是与企业决策者保持联系，他们知道你所在领域的招聘淡、旺季，了解市场上的机会。企业交托到猎头手上的职位一般都是优质的职位。',
						' ',
						'有了一定的经验和成绩，你的市场价值得到充分展现，就会吸引更多的猎头。“猎头不是为所有人找工作，而是为好工作找人。”因此除了考虑猎头手上的优选职位，你也可以主动出击，加入猎头公司的人才库。',
						' ',
						'猎头顾问的手机里，一般来说都有1000人以上的中高端人才及相关人脉，这些人集中在某些行业里，分布在不同的领域和企业。',
						' ',
						'一个优秀的猎头，通常是通熟专业、擅长管理、见多识广的。',
						' ',
						'他们必须掌握的知识和技能有：企业的战略管理、人力资源管理、组织变革管理、流程管理、目标管理、时间管理、工作分析、岗位编制、招聘与面试、薪酬与绩效设计、职业生涯规划、沟通技巧、商务礼仪、应用心理学、信息管理等等。',
						' ',
						'以上技能普遍适用于任何行业的猎头。而作为特定行业，譬如食品行业的猎头，甚至需要食品相关专业毕业，及食品企业几年工作经历。',
					]
				}, {
					tit: '猎头是企业的人才战略专家',
					txt: [
						'人才战略专家？有这么夸张吗？没错！仍以食品行业为例，对于一个成熟的食品企业来讲，猎头是他们编外的人才发展中心，因为猎头知道这个行业里的大咖、牛人在哪里、在想什么；同时也能洞察企业里存在的问题，哪些问题是可以通过哪些人的入职而解决的。',
						'对于一个刚刚起步的食品企业，有一个合适的猎头伙伴，就相当于开了外挂！刚起步的公司，很有可能HR并不了解这个行业，甚至对人才配置、招聘梯度都是模糊的，在我们猎头的经历中，无数的核心人才招聘案例，都触及企业的核心，甚至影响了企业的重大变革。'
					]
				}, {
					tit: '猎头是NICE的职业规划师',
					txt: [
						'当一个猎头联系上一个候选人的时候，他在大脑里已经启动的工作有：性格测评、能力测评、优缺点分析、求职动机分析、离职原因分析、薪酬定位、岗位匹配、职业规划等等。',
						'凭借丰富的职业经验，在每一次为候选人推荐岗位的时候，他们都是先做以上的工作，才开始为候选人甄选匹配的岗位。',
						'所以，不要看低你身边的猎头，你可以因为他位卑权低小看他，但是你不能小看让你得以提升的任何机遇。'
					]
				}, {
					tit: '猎头比你更关心你是否适合下一份工作',
					txt: [
						'大家都知道，猎头帮客户的职位招人。但可能不知道的是，仅仅找到人，签了合同顺利入职还不够。许多职位，尤其是高端职位，通过试用期才算圆满完成搜寻任务。所以，他们甚至比你更关心你是否能融入企业和胜任新的工作，并不会因为急于完成任务而不诚实。',
						'你可能被大幅度涨薪、各种福利迷花了眼，猎头则会冷静分析后续发展前景。职业规划是他们的强项，这不是泛泛而谈，而是阅人无数从实战中累积的技能。',
						'专业的猎头不仅对客户负责，也对你负责，并非单纯从客户的角度招揽你，亦是站在你的角度去分析，匹配专业技能和发展方向，为你提出合理的建议。'
					]
				},
				{
					tit: '面试、谈薪，他们的确是专家',
					txt: [
						'千万不要小看猎头在面试前给你的技巧辅导和建议。站在旁观者的角度，他们能客观地分析你的优势劣势，总结你在电话面试和face to face 面试中的表现，沟通方式、姿态语气等等，对它们提出的修正建议会对正式面试大有帮助。',
						'而在谈薪资方面，猎头的先天优势则在于他们对职位市场价值的了解，他们是行业薪酬专家，更不消说，他们通常了解客户理想的薪资范围。',
						'所以，一个优秀的猎头，必然是拥有诚实的品质，乐于助人，忠于事实，并有着严格的保密意识，是值得信赖和深交的朋友。'
					]
				},
			]
		},
		{
			img: '/article/art1-7.png',
			tit: '职业简介',
			txt: [
				'Tingting是一位资深的人才服务行业合伙人，毕业于英国索尔福德大学，后就职于波兰多年后回国。多年的海外学习和生活让她对国际人文环境，全球化商业意识都有着丰富的经验。',
				'在创立C-Suite之前，Tingting曾作为跨国猎头公司的高级管理层，带领团队在整个亚洲市场做出非常优异的业绩。她成功推荐的候选人不光在客户公司稳定长久，而且业绩突出。',
				'凭借在猎头领域有着15多年的丰富经验，Tingting带领C-Suite Executive专注于中国市场，在工业领域资深管理及高管招聘方面颇有建树，行业涵盖了机械、自动化、化工、汽车，电气电子，包装，消费品等，更好地与国内外客户及高管级候选人建立稳固长期的战略伙伴关系，为客户提供长远、高效、高品质的服务与发展。'
			]
		},
		{
			msg: [
				{
					tit: '近期一些有意思的成功案例',
					txt: [
						'帮助Loba、Tessenderlo、Occhio、Triump，Tessenderlo, ASI, Master Fluid等中小型家族企业招聘到亚太或者中国区董事长人选，并从零开始搭建扩充国内团队，使企业成功迈入中国市场，并且一直发展壮大。'
					]
				},
				{
					tit: '关于我',
					txt: [
						'创办C-Suite，旨为打造一流的人力资源服务供应商，成为客户专业且可靠的合作伙伴',
						'结果导向，不失细节',
						'寻求变革，鼓励创新',
						'追求卓越，前瞻思维',
						'喜爱运动，健身达人',
						'热爱生活，以饱满的能量面对工作与生活的每一天！'
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
