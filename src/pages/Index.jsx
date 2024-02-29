import React from "react";
import { Box, Container, Heading, SimpleGrid, Image, Text, Flex, VStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaVimeoV, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        {/* 헤더 */}
        <Flex w="100%">
          <Heading as="h1" size="xl">
            작품 포트폴리오
          </Heading>
          <Spacer />
          <IconButton aria-label="이메일로 연락하기" icon={<FaEnvelope />} isRound={true} size="lg" variant="ghost" />
          <IconButton aria-label="인스타그램 페이지로 이동" icon={<FaInstagram />} isRound={true} size="lg" variant="ghost" />
          <IconButton aria-label="비메오 페이지로 이동" icon={<FaVimeoV />} isRound={true} size="lg" variant="ghost" />
        </Flex>

        {/* 갤러리 뷰 */}
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
          {Array.from({ length: 8 }, (_, i) => (
            <Box key={i} position="relative">
              <Image src={`https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwaW1hZ2UlMjAlMjQlN0JpJTIwJTJCJTIwMSU3RHxlbnwwfHx8fDE3MDkyMTc5NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`갤러리 이미지 ${i + 1}`} />
              <IconButton aria-label="프로젝트 상세보기" icon={<FaArrowRight />} isRound={true} size="sm" variant="solid" colorScheme="blue" position="absolute" bottom="2" right="2" />
            </Box>
          ))}
        </SimpleGrid>

        {/* 사용자 소개 */}
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg">
            소개
          </Heading>
          <Text fontSize="md">안녕하세요, 저는 창의적인 사진 및 영상 작업을 하는 홍길동입니다. 새로운 시각으로 세상을 바라보고, 그 아름다움을 기록합니다.</Text>
        </VStack>

        {/* 연락처 정보 */}
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg">
            연락처
          </Heading>
          <Text fontSize="md">이메일: artist@example.com</Text>
          <Text fontSize="md">인스타그램: @artist_ig</Text>
          <Text fontSize="md">비메오: artist_vimeo</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
